import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const data: Record<string, { title: string; category: string; gradient: string; text: string }> = {
  aurora: { title: "Aurora", category: "Brand Film", gradient: "from-violet-500 via-fuchsia-500/50 to-cyan-300/60", text: "A cinematic identity concept built around luminous gradients, slow depth and responsive storytelling." },
  orbit: { title: "Orbit", category: "Product Experience", gradient: "from-cyan-400 via-blue-500/50 to-violet-500", text: "A product landing experience where interface modules behave like objects in a calm spatial system." },
  nexus: { title: "Nexus", category: "3D Interface", gradient: "from-emerald-300 via-cyan-500/50 to-blue-600", text: "A fictional spatial dashboard exploring layered glass panels and data-driven visual rhythm." },
  halo: { title: "Halo", category: "Creative Commerce", gradient: "from-orange-300 via-pink-500/50 to-violet-500", text: "A premium commerce direction designed to make products feel tactile and collectible." },
  pulse: { title: "Pulse", category: "Music Platform", gradient: "from-pink-400 via-red-500/40 to-orange-300", text: "A dark audio experience with kinetic cards, energetic transitions and editorial rhythm." },
  atlas: { title: "Atlas", category: "Spatial Product", gradient: "from-blue-400 via-indigo-500/50 to-cyan-300", text: "A map-inspired product concept where information unfolds through depth and controlled movement." },
};

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data[slug];
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/45"><ArrowLeft size={15} />Back to projects</Link>
      <div className={`relative mt-8 aspect-[16/8] overflow-hidden rounded-[2rem] bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,.35),transparent_25%)]" />
        <div className="absolute bottom-8 left-8"><span className="eyebrow"><Sparkles size={12} />{project.category}</span><h1 className="mt-4 text-6xl font-semibold">{project.title}</h1></div>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
        <div><h2 className="text-3xl font-semibold">The idea</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-white/50">{project.text}</p></div>
        <div className="glass rounded-3xl p-6"><p className="text-xs uppercase tracking-[.2em] text-white/30">Deliverables</p><ul className="mt-5 space-y-3 text-sm text-white/60"><li>Visual direction</li><li>Interaction system</li><li>Responsive UI</li><li>Motion prototype</li></ul></div>
      </div>
      <div className="mt-12 flex justify-between border-t border-white/10 pt-6 text-sm"><Link href="/projects">All projects</Link><Link href="/contact" className="flex items-center gap-2">Build something similar<ArrowRight size={15} /></Link></div>
    </main>
  );
}
