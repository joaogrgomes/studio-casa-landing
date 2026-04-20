export function About() {
  return (
    <section id="expertise" className="bg-forest text-lime px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal flex flex-col gap-6">
          <span className="eyebrow !text-lime/60">01 — Who We Are</span>
          <h2 className="heading-lime text-[28px] sm:text-[36px] max-w-md">
            Movement without meaning is just noise.
          </h2>
          <p className="font-body text-[15px] text-lime/65 max-w-md leading-relaxed">
            Studio CASA is a brand strategy and creative direction studio operating between Brazil and UAE.
            We believe every brand deserves a clear point of view before it moves.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="pill pill-forest">brand strategy</span>
            <span className="pill pill-forest">creative direction</span>
            <span className="pill pill-forest">content</span>
          </div>
        </div>

        <div className="reveal relative">
          <div className="bg-cream rounded-[20px] aspect-square flex items-center justify-center relative overflow-hidden">
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
    </section>
  );
}
