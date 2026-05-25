import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <section id="expertise" className="bg-forest text-lime px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal flex flex-col gap-6">
          <span className="eyebrow !text-lime/60">01 — Who We Are</span>
          <h2 className="heading-lime text-[clamp(30px,3vw,36px)] max-w-md">
            Movement without meaning is just noise.
          </h2>
          <p className="font-brand text-[15px] text-lime/65 max-w-md leading-relaxed">
            Casa Studio brings together strategic thinking, narrative craft and cinematic production to create content with purpose. Rooted in Brazilian creative heritage and based in Dubai, we build tailored solutions for brands, events and talents across the UAE market.
          </p>
          <p className="font-brand text-[15px] text-lime/65 max-w-md leading-relaxed">
            From brand identity to campaign films, every project starts with understanding the client&apos;s vision before turning it into a visual story.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="pill pill-forest">strategy</span>
            <span className="pill pill-forest">storytelling</span>
            <span className="pill pill-forest">cinematic production</span>
          </div>
        </div>

        <div className="reveal relative">
          <div className="bg-beige rounded-[20px] aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 sm:w-28 sm:h-28 bg-ink rounded-[6px]" />
              ))}
            </div>
            <div className="absolute bottom-5 right-5 w-20 h-20 rounded-full bg-forest text-lime flex items-center justify-center font-mono text-[9px] tracking-[0.18em] uppercase text-center leading-tight">
              CASA<br />STUDIO
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 reveal">
          <Link to="/about" className="btn btn-ghost">
            More about us <ArrowRight size={16} />
          </Link>
        </div>

    </section>
  );
}
