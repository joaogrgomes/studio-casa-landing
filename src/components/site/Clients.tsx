const logos = ["NORTH&CO", "VERTA", "MAISON 14", "ATLAS/ARC", "FOLIO", "CASA NOVA"];

export function Clients() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-28">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <div className="reveal flex flex-col gap-5 max-w-xl">
          <span className="eyebrow">05 — Trusted By</span>
        </div>

        <div className="reveal flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-y border-stone/40 py-7">
          {logos.map((l) => (
            <span key={l} className="font-mono text-[13px] tracking-[0.18em] text-olive/50">{l}</span>
          ))}
        </div>

        <blockquote className="reveal max-w-3xl">
          <p className="font-display font-bold italic text-[24px] sm:text-[28px] text-ink leading-snug">
            "At CASA, every delivery begins with insight, intention, and a clear understanding of what the brand truly needs."
          </p>
          <footer className="font-mono text-[11px] tracking-[0.16em] uppercase text-olive mt-5">
            — Studio CASA Manifesto
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
