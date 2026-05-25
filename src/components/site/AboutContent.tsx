const values = [
  {
    n: '01',
    title: 'Strategic Personalization',
    body: 'We develop tailored solutions that range from building brand identity to executing data-driven marketing funnels.',
  },
  {
    n: '02',
    title: 'Technical Quality',
    body: 'We utilize professional pocket cinema cameras and refined techniques to deliver high-end visual results for every project.',
  },
  {
    n: '03',
    title: 'Narrative Excellence',
    body: 'We prioritize deep storytelling and authentic narratives over generic content packages to create true emotional impact.',
  },
  {
    n: '04',
    title: 'Cultural Heritage',
    body: 'We integrate ten years of Brazilian creative soul and welcoming culture into the ambitious Dubai market.',
  },
]

const team = [
  {
    name: 'Eduardo Hanke',
    role: 'Account Manager',
    image: '/team/eduardo.jpg',
    alt: 'Eduardo Hanke, Account Manager at Casa Studio',
  },
  {
    name: 'Marcelo Lourenço',
    role: 'Video Director',
    image: '/team/marcelo.jpg',
    alt: 'Marcelo Lourenço, Video Director at Casa Studio',
  },
  {
    name: 'Viniccius Redondano',
    role: 'Creative Director',
    image: '/team/viniccius.jpg',
    alt: 'Viniccius Redondano, Creative Director at Casa Studio',
  },
]

const portfolioSnapshot = [
  'Fursan MMA',
  'GRID',
  'João Samurai',
  'Desert Mirage',
  'Combat Sports',
  'Fashion & Lifestyle',
]

export function AboutContent() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 radial-bg">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-col gap-5 max-w-3xl">
            <span className="eyebrow">About Casa Studio</span>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}>
              Storytelling with strategy,
              <br />
              built in Dubai.
            </h1>
            <p className="font-brand text-[16px] text-muted leading-relaxed max-w-2xl">
              We are the storytellers, visionaries, and creative minds behind brands that want to move with clarity. Casa Studio merges cinematic aesthetics with strategic thinking to create high-impact narratives for ambitious businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto reveal">
          <span className="eyebrow !text-lime/60">01 — Manifesto</span>
          <h2 className="heading-lime text-[32px] sm:text-[44px] max-w-4xl mt-6 leading-snug">
            "We're the storytellers, visionaries, and creative dreamers who turn your ideas into cinematic adventures. With us, every project is a chance to create meaningful work that connects and lasts."
          </h2>
        </div>
      </section>

      <section className="bg-beige px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-col gap-5 mb-14 max-w-2xl">
            <span className="eyebrow">02 — Our Values</span>
            <h2 className="display display-md">What guides every delivery.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <article
                key={v.n}
                className="card-light reveal flex flex-col gap-4 min-h-[200px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono text-[11px] text-muted tracking-[0.14em]">{v.n}</span>
                <h3 className="font-brand font-bold text-[22px] text-ink leading-tight">{v.title}</h3>
                <p className="font-brand text-[15px] text-muted leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="reveal flex flex-col gap-5 mb-14 max-w-2xl">
            <span className="eyebrow !text-lime/60">03 — The People</span>
            <h2 className="heading-lime text-[40px] sm:text-[56px]">A focused senior team.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <article
                key={member.name}
                className="card-dark reveal flex flex-col gap-5 min-h-[220px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-full aspect-[4/5] rounded-[14px] overflow-hidden">
                  <img src={member.image} alt={member.alt} className="w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-brand font-semibold text-lime text-[20px] leading-tight">{member.name}</p>
                  <p className="font-mono text-[11px] text-lime/60 tracking-[0.14em] uppercase">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-6 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">
          <div className="reveal flex flex-col gap-5 max-w-xl">
            <span className="eyebrow">04 — Portfolio Snapshot</span>
            <h2 className="display display-md">Selected work across brands, events and talents.</h2>
            <p className="font-brand text-[16px] text-muted leading-relaxed">
              A growing portfolio shaped by cinematic storytelling, cultural perspective and production craft in Dubai.
            </p>
          </div>

          <div className="reveal flex flex-wrap items-center gap-3 border-y border-stone/40 py-7">
            {portfolioSnapshot.map((item) => (
              <span key={item} className="pill">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="reveal flex flex-col gap-5 mb-10">
            <span className="eyebrow">05 — How We Work</span>
            <h2 className="display display-md">Built around each client&apos;s unique needs.</h2>
          </div>

          <div className="reveal font-brand text-[16px] text-muted leading-relaxed space-y-6">
            <p>
              At Casa Studio, we do not believe in selling generic packages. Our approach is built on understanding each client&apos;s unique needs to deliver tailored cinematic solutions that resonate with specific business goals. By combining ten years of Brazilian creative heritage with the ambition of the Dubai market, we ensure that every project is a personalized masterpiece driven by deep storytelling.
            </p>
            <blockquote className="font-brand font-bold text-ink text-[22px] leading-snug border-l-4 border-tomato pl-6 my-10">
              "Truly understanding a client&apos;s vision of their business is the foundation for creating personalized cinematic narratives that drive real growth and connection."
            </blockquote>
            <p>
              We bring an intentional and collaborative process to every partnership. Our work starts by shaping a clear identity and strengthening brand positioning, then expands into narrative development, campaign direction, and high-level production.
            </p>
            <p>
              From concept to final delivery, we combine strategic thinking and audiovisual excellence to turn each vision into a clear, memorable brand experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
