import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    n: "01",
    client: "FURSAN",
    tag: "Content Strategy",
    title: "Building the Future of Combat.",
    body: "A long-form content system designed to give the brand a real point of view — not just posts.",
    year: "2024",
    cat: "CONTENT",
  },
  {
    n: "02",
    client: "UAE WARRIORS",
    tag: "Brand Overhaul",
    title: "A new voice for a legacy brand.",
    body: "Repositioning a combat sports brand for a new generation, without losing the authority built over years.",
    year: "2024",
    cat: "REBRAND",
  },
  {
    n: "03",
    client: "TERRA VERDE",
    tag: "Brand Strategy",
    title: "Clarity before the launch.",
    body: "Foundational strategy for a category-defining agribusiness product — built before a single asset was designed.",
    year: "2023",
    cat: "STRATEGY",
  },
];

export function Work() {
  return (
    <section id="projects" className="bg-forest px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col gap-5 mb-14 max-w-2xl">
          <span className="eyebrow !text-lime/60">03 — Selected Work</span>
          <h2 className="heading-lime text-[40px] sm:text-[56px]">Brands we've helped move.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article key={p.n} className="card-dark reveal flex flex-col gap-5 min-h-[280px]" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-lime tracking-[0.14em] uppercase">{p.client}</span>
                <span className="pill pill-forest !text-[11px] !py-1 !px-3">{p.tag}</span>
              </div>
              <h3 className="font-brand font-bold text-[22px] text-lime leading-tight mt-2">{p.title}</h3>
              <p className="font-brand text-[15px] text-lime/65 leading-relaxed">{p.body}</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-lime/15 font-mono text-[11px] text-lime tracking-[0.12em] uppercase">
                <span>{p.year}</span>
                <span>{p.cat}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 reveal">
          <Link to="/projects" className="btn btn-ghost">
            See all projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
