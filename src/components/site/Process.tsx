const steps = [
  { n: "01", label: "Decode", body: "We research the brand, the market, and the audience. No assumptions." },
  { n: "02", label: "Define", body: "We establish the strategic foundation: positioning, voice, and direction." },
  { n: "03", label: "Direct", body: "We lead the creative execution with intention at every touchpoint." },
  { n: "04", label: "Deliver", body: "We roll out and support the brand as it moves into the world." },
];

export function Process() {
  return (
    <section className="bg-beige px-6 py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex flex-col gap-5 mb-16 max-w-2xl">
          <span className="eyebrow">04 — How We Work</span>
          <h2 className="display display-md">Meaning before motion — always.</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal flex flex-col gap-4 relative" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="font-mono text-[11px] text-muted tracking-[0.16em]">{s.n}</span>
              <span className="pill self-start">{s.label}</span>
              <p className="font-brand text-[14px] text-muted leading-relaxed max-w-[240px]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
