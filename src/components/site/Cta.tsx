import { ArrowRight, Asterisk } from "lucide-react";

export function Cta() {
  return (
    <section id="contact" className="radial-bg px-6 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        <div className="reveal flex items-center justify-center gap-2 flex-wrap">
          <span className="pill">meaning</span>
          <Asterisk size={14} className="text-muted" />
          <span className="pill">before</span>
          <Asterisk size={14} className="text-muted" />
          <span className="pill">motion</span>
        </div>

        <h2 className="reveal display display-md max-w-3xl">
          Ready to build something that lasts?
        </h2>

        <p className="reveal font-brand text-[16px] text-muted max-w-md">
          Let's create with intention.
        </p>

        <a href="mailto:create@casastudioae.com" className="reveal btn btn-primary btn-lg">
          Start a Project <ArrowRight size={18} />
        </a>

        <p className="reveal font-mono text-[11px] tracking-[0.16em] uppercase text-muted mt-2">
          Dubai, UAE · (+971) 58 176 9204
        </p>
      </div>
    </section>
  );
}
