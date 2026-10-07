"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setError("The free email form is not activated yet. Add its Web3Forms access key in Vercel to enable submissions.");
      return;
    }

    // Keep the honeypot quiet: automated fills are treated as completed but never sent.
    if (String(formData.get("website") ?? "").trim()) {
      setStatus("sent");
      form.reset();
      return;
    }
    formData.delete("website");
    formData.set("access_key", accessKey);
    formData.set("subject", "New project inquiry — Velora Motion Studio");
    formData.set("from_name", "Velora Motion Studio website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "We couldn't send your message.");
      setStatus("sent");
      form.reset();
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Please try again later.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <span className="eyebrow">Start a project</span>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold md:text-7xl">Tell us what you want to make move.</h1>
      <p className="mt-6 max-w-2xl text-lg text-white/50">Share a little about your project and the Velora team will get back to you.</p>

      <div className="glass mt-14 max-w-3xl rounded-3xl p-7">
        {status === "sent" ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <CheckCircle2 size={56} className="text-cyan-300" />
            <h2 className="mt-5 text-3xl font-semibold">Message sent.</h2>
            <p className="mt-3 text-white/45">Thanks for reaching out. Your inquiry has been sent to the Velora team.</p>
            <button type="button" onClick={() => setStatus("idle")} className="mt-6 rounded-xl border border-white/10 px-4 py-2">Send another</button>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-white/55">Name<input name="name" required minLength={2} maxLength={100} autoComplete="name" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.04] p-3 outline-none" placeholder="Alex Morgan" /></label>
              <label className="text-sm text-white/55">Email<input name="email" required type="email" maxLength={254} autoComplete="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.04] p-3 outline-none" placeholder="alex@example.com" /></label>
            </div>
            <label className="block text-sm text-white/55">Message<textarea name="message" required minLength={10} maxLength={5000} rows={6} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[.04] p-3 outline-none" placeholder="Tell us about the project..." /></label>
            <label aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
            {status === "error" && <p role="alert" className="text-sm text-rose-300">{error}</p>}
            <button disabled={status === "sending"} className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black disabled:cursor-wait disabled:opacity-60">
              {status === "sending" ? "Sending…" : "Send inquiry"}<ArrowRight className="ml-2" size={16} />
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
