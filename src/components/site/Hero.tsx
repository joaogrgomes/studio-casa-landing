import { Home, ArrowRight, Asterisk } from "lucide-react";

export function Hero() {
  return (
    <section className="radial-bg relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute top-24 right-6 sm:right-10">
        <span className="icon-circle icon-tomato" style={{ width: 32, height: 32 }}>
          <Home size={14} strokeWidth={2.25} />
        </span>
      </div>

      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="pill anim-fade-up leading-none justify-center">meaning</span>
          <span className="pill anim-fade-up anim-delay-1 leading-none justify-center">before</span>
          <span className="pill pill-tomato items-center anim-fade-up anim-delay-2">motion</span>
        </div>

        <h1 className="display display-hero anim-fade-up anim-delay-3">
          Strategy, storytelling and
          <br />
          cinematic production
          <br />
          from Dubai.
        </h1>

        <p className="font-brand text-[16px] text-muted leading-relaxed max-w-[680px] anim-fade-up anim-delay-4">
          Casa Studio helps brands, events and talents turn ideas into visual narratives that move people — blending Brazilian creative heritage with the ambition of the UAE market.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 anim-fade-up anim-delay-5">
          <a href="#contact" className="btn btn-primary">
            Start a Project <ArrowRight size={16} />
          </a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted">
        <Asterisk size={22} className="anim-spin-slow" strokeWidth={2} />
      </div>
    </section>
  );
}
