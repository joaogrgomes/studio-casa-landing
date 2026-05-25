import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function Work() {
  const featuredProjects = projects.filter((project) => project.status === "published" && project.featured).slice(0, 3);

  return (
    <section id="projects" className="bg-forest px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col gap-5 mb-14 max-w-2xl">
          <span className="eyebrow !text-lime/60">03 — Selected Work</span>
          <h2 className="heading-lime text-[40px] sm:text-[56px]">Built for brands, events and talents.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => (
            <article key={project.title} className="card-dark reveal flex flex-col gap-5 min-h-[280px]" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[11px] text-lime tracking-[0.14em] uppercase">{project.client}</span>
                <span className="pill pill-forest !text-[11px] !py-1 !px-3">{project.category}</span>
              </div>
              <h3 className="font-brand font-bold text-[22px] text-lime leading-tight mt-2">{project.title}</h3>
              <p className="font-brand text-[15px] text-lime/65 leading-relaxed">{project.homeSummary ?? project.summary}</p>
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-lime/15 font-mono text-[11px] text-lime tracking-[0.12em] uppercase">
                <span>{project.location}</span>
                <span>{project.services[0]}</span>
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
