const fields = ["Brands", "Events", "Talents", "Lifestyle", "Fashion", "Combat Sports"];

export function Clients() {
  return (
    <section className="bg-beige px-6 py-24 sm:py-28">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        <div className="reveal flex flex-col gap-5 max-w-xl">
          <span className="eyebrow">05 — Selected Fields</span>
          <h2 className="display display-md">Built for brands, events and talents.</h2>
        </div>

        <div className="reveal flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-y border-stone/40 py-7">
          {fields.map((field) => (
            <span key={field} className="font-mono text-[13px] tracking-[0.18em] text-muted">{field}</span>
          ))}
        </div>

        <blockquote className="reveal max-w-3xl">
          <p className="font-brand font-bold italic text-[24px] sm:text-[28px] text-ink leading-snug">
            "At Casa Studio, every delivery begins with insight, intention, and a clear understanding of what the brand truly needs."
          </p>
          <footer className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted mt-5">
            — Casa Studio Manifesto
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
