import { ArrowUpRight, Box, Code2, Film, MousePointer2, Wand2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const services: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  { number: "01", title: "Motion Systems", description: "Reusable animation language.", icon: Wand2 },
  { number: "02", title: "Creative Development", description: "Production-ready Next.js interfaces.", icon: Code2 },
  { number: "03", title: "3D Direction", description: "Spatial visual concepts and depth.", icon: Box },
  { number: "04", title: "Product UI", description: "Premium dashboards and product experiences.", icon: MousePointer2 },
  { number: "05", title: "Brand Films", description: "Cinematic launch pages and interactive stories.", icon: Film },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-36">
      <Reveal><span className="eyebrow">Capabilities</span><h1 className="mt-5 text-5xl font-semibold md:text-7xl">Design, code and motion in one system.</h1><p className="mt-6 max-w-2xl text-lg text-white/50">A compact service stack for premium websites, launch experiences and modern product interfaces.</p></Reveal>
      <div className="mt-14 space-y-3">
        {services.map(({ number, title, description, icon: Icon }) => (
          <Reveal key={number}><div className="glass flex items-center gap-5 rounded-3xl p-6 md:p-8"><span className="text-xs text-white/30">{number}</span><Icon className="text-violet-300" /><div className="flex-1"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-2 text-sm text-white/45">{description}</p></div><ArrowUpRight className="text-white/30" /></div></Reveal>
        ))}
      </div>
    </main>
  );
}
