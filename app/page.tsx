import { ArrowRight, Layers3, Sparkles, Zap } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Visual } from "@/components/Visual";

const projects = [
  { slug: "aurora", title: "Aurora", category: "Brand Film", gradient: "from-violet-500 via-fuchsia-500/40 to-cyan-300/50", num: "01" },
  { slug: "orbit", title: "Orbit", category: "Product Experience", gradient: "from-cyan-400 via-blue-500/40 to-violet-500", num: "02" },
  { slug: "nexus", title: "Nexus", category: "3D Interface", gradient: "from-emerald-300 via-cyan-500/30 to-blue-600", num: "03" },
];

const features = [
  { icon: Layers3, title: "Layered systems", description: "Reusable motion primitives and clean component architecture." },
  { icon: Zap, title: "Fast interactions", description: "Motion with purpose: guide attention and communicate state." },
  { icon: Sparkles, title: "Premium detail", description: "Glass surfaces, ambient light and refined micro-interactions." },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-20 pt-32 md:grid-cols-2">
        <div>
          <Reveal><span className="eyebrow"><Sparkles size={13} /> Motion design studio</span></Reveal>
          <Reveal><h1 className="mt-6 text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl">Digital worlds that <span className="gradient-text">move.</span></h1></Reveal>
          <Reveal><p className="mt-6 max-w-xl text-lg leading-7 text-white/50">Premium interfaces, motion systems and cinematic product experiences for brands that refuse to look ordinary.</p></Reveal>
          <Reveal><div className="mt-8 flex gap-3"><MagneticButton href="/projects">Explore work <ArrowRight className="ml-2" size={16} /></MagneticButton><a href="/contact" className="rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/60">Start a conversation</a></div></Reveal>
        </div>
        <Visual />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Reveal key={title}><div className="glass rounded-3xl p-7"><Icon className="text-cyan-300" /><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{description}</p></div></Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal><span className="eyebrow">Selected work</span><h2 className="mt-4 text-4xl font-semibold md:text-5xl">Built to be remembered.</h2></Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} p={project} />)}</div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="glass rounded-[2rem] p-8 md:p-14"><span className="eyebrow">The next frame</span><h2 className="mt-5 text-4xl font-semibold md:text-6xl">Have a product worth moving?</h2><p className="mt-5 max-w-xl text-white/50">Bring the rough idea. Turn it into a polished visual system with motion at its core.</p><div className="mt-8"><MagneticButton href="/contact">Start a project <ArrowRight className="ml-2" size={16} /></MagneticButton></div></div>
      </section>
    </main>
  );
}
