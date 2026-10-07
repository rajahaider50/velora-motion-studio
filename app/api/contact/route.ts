import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > 12_000) {
    return NextResponse.json({ error: "The request is too large." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;
  // Quietly discard automated submissions that fill the visually-hidden field.
  if (typeof fields.website === "string" && fields.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim().toLowerCase() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Enter a name between 2 and 100 characters." }, { status: 400 });
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5_000) {
    return NextResponse.json({ error: "Your message must be between 10 and 5,000 characters." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !recipient || !sender) {
    return NextResponse.json({ error: "The contact service is not configured yet. Please try again later." }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `Velora Studio inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Resend rejected a contact submission:", response.status);
      return NextResponse.json({ error: "We couldn't send your message right now. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "We couldn't send your message right now. Please try again later." }, { status: 502 });
  }
}
