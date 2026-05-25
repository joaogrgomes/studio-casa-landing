import { Home, ArrowUpRight, Asterisk, Square, Film, Clapperboard } from "lucide-react";
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
    title: "Brand Films",
    body: "Scripted and documentary-style films that translate brand positioning into cinematic narratives.",
    tags: ["concept", "script", "cinematic production"],
  },
  {
    icon: <ArrowUpRight size={20} strokeWidth={2.25} />,
    iconClass: "icon-lime",
    title: "Event Content",
    body: "Promotional assets, highlights and backstage storytelling built for events and live experiences.",
    tags: ["event promo", "highlights", "behind the scenes"],
  },
  {
    icon: <Film size={18} strokeWidth={2.25} />,
    iconClass: "icon-cream",
    title: "Lifestyle Campaigns",
    body: "Campaign production that blends narrative direction, premium visuals and market relevance.",
    tags: ["campaign film", "lookbook", "teasers"],
  },
  {
    icon: <Square size={18} strokeWidth={2.25} />,
    iconClass: "icon-forest",
    title: "Creative Direction",
    body: "Visual and conceptual leadership from pre-production through final delivery.",
    tags: ["art direction", "visual language", "production oversight"],
  },
  {
    icon: <Asterisk size={20} strokeWidth={2.25} />,
    iconClass: "icon-tomato",
    title: "Storytelling & Script Development",
    body: "Narrative frameworks, scripts and voiceovers crafted to create emotional connection and clarity.",
    tags: ["narrative strategy", "scriptwriting", "voiceover"],
  },
  {
    icon: <Clapperboard size={18} strokeWidth={2.25} />,
    iconClass: "icon-lime",
    title: "Social Media Content",
    body: "Short and mid-form content systems designed for consistency, pace and audience engagement.",
    tags: ["social content", "editing", "distribution-ready assets"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-beige px-6 py-24 sm:py-32">
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
