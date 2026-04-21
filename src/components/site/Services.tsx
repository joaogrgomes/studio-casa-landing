import { Home, ArrowUpRight, Asterisk, Square } from "lucide-react";
import type { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  iconClass: string;
  title: string;
  body: string;
  tags: string[];
};

const services: Service[] = [
  {
    icon: <Home size={18} strokeWidth={2.25} />,
    iconClass: "icon-tomato",
    title: "Brand Strategy",
    body: "We define the foundation your brand stands on — positioning, voice, values, and competitive clarity.",
    tags: ["positioning", "voice", "research"],
  },
  {
    icon: <ArrowUpRight size={20} strokeWidth={2.25} />,
    iconClass: "icon-lime",
    title: "Creative Direction",
    body: "We lead the visual and conceptual development of campaigns, identities, and brand moments.",
    tags: ["visual identity", "campaigns", "art direction"],
  },
  {
    icon: <Asterisk size={20} strokeWidth={2.25} />,
    iconClass: "icon-cream",
    title: "Content & Production",
    body: "From social to editorial, we create content that communicates with intention — not just volume.",
    tags: ["social", "editorial", "video"],
  },
  {
    icon: <Square size={18} strokeWidth={2.25} />,
    iconClass: "icon-forest",
    title: "Brand Overhaul",
    body: "Full rebrands for brands ready to evolve. Strategy, identity, and rollout — all in one house.",
    tags: ["rebrand", "identity", "launch"],
  },
];

export function Services() {
  return (
    <section className="bg-beige px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col gap-5 mb-14 max-w-2xl">
          <span className="eyebrow">02 — What We Do</span>
          <h2 className="display display-md">Direction built on meaning &amp; clarity.</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <article key={s.title} className="card-light reveal flex flex-col gap-5" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className={`icon-circle ${s.iconClass}`}>{s.icon}</span>
              <h3 className="font-brand font-bold text-[22px] text-ink leading-tight">{s.title}</h3>
              <p className="font-brand text-[16px] text-muted leading-relaxed">{s.body}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {s.tags.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
