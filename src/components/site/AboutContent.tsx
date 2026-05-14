const values = [
  {
    n: '01',
    title: 'Strategic Personalization',
    body: 'We develop tailored solutions that range from building brand identity to executing data driven marketing funnels.',
  },
  {
    n: '02',
    title: 'Technical Quality',
    body: 'We utilize professional pocket cinema cameras and refined techniques to deliver high end visual results for every project.',
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
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Marcelo Lourenço',
    role: 'Video Director',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Viniccius Redondano',
    role: 'Creative Director',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

const clients = [
  'FURBAN', 'FRANCIS LAMAS', 'THE RED DOOR', 'OLD WARRIORS',
  'UAE WARRIORS', 'AGRO', 'GRID.EA', 'CASA STUDIO',
]

export function AboutContent() {
  return (
    <>
      {/* ── SECTION 1 — Hero ──────────────────────────────────────── */}
      <section className="px-6 pt-36 pb-20">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow">04 — ABOUT US</span>
          <h1 className="display display-hero mt-5 max-w-3xl">
            We are the storytellers<br />behind the brand.
          </h1>
          <p className="font-brand text-[16px] text-muted leading-relaxed max-w-xl mt-6">
            Casa Studio is an audiovisual production house and creative agency based
            in Dubai that merges cinematic aesthetics with business strategy. With over
            a decade of international experience and roots in Brazil, we transform
            concepts into high impact visual narratives for brands seeking exclusivity
            and authority.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — Manifesto ─────────────────────────────────── */}
      <section className="bg-forest px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow !text-lime/60">01 — MANIFESTO</span>
          <h2 className="heading-lime text-[32px] sm:text-[44px] max-w-4xl mt-6 leading-snug">
            "We're the storytellers, visionaries, and creative dreamers who turn your{' '}
            <span className="text-lime">ideas into cinematic adventures.</span>{' '}
            With us, work feels like play, and every project is a chance to{' '}
            <span className="text-tomato">make magic</span> happen."
          </h2>
        </div>
      </section>

      {/* ── SECTION 3 — Values ────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow">02 — OUR VALUES</span>
          <h2 className="display display-md mt-5 mb-16">
            The Secret Sauce in Every StoryStream Creation!
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <article
                key={v.n}
                className="card-dark reveal flex flex-col gap-4 min-h-[200px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-mono text-[11px] text-lime tracking-[0.14em]">{v.n}</span>
                <h3 className="font-brand font-bold text-[22px] text-lime leading-tight">{v.title}</h3>
                <p className="font-brand text-[15px] text-lime/65 leading-relaxed">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Team ──────────────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow">03 — THE PEOPLE</span>
          <h2 className="display display-md mt-5 mb-16">Meet our Team!</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((t, i) => (
              <article
                key={t.name}
                className="card-dark reveal flex flex-col gap-3"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-full aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-2">
                  <p className="font-brand font-semibold text-lime text-[17px]">{t.name}</p>
                  <p className="font-mono text-[11px] text-lime/50 tracking-[0.14em] uppercase mt-1">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Clients ───────────────────────────────────── */}
      <section className="bg-forest px-6 py-24 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <span className="eyebrow !text-lime/60">04 — CLIENTS</span>
          <h2 className="heading-lime text-[40px] sm:text-[56px] mt-5 mb-14">
            Our Creative Playground.
          </h2>
          <div className="flex flex-wrap gap-3">
            {clients.map((b) => (
              <span key={b} className="pill pill-forest !text-[13px] !py-2 !px-5">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — How We Work ───────────────────────────────── */}
      <section className="px-6 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <span className="eyebrow">05 — PROCESS</span>
          <h2 className="display display-md mt-5 mb-10">How We Work</h2>
          <div className="font-brand text-[16px] text-muted leading-relaxed space-y-6">
            <p>
              At Casa Studio, we do not believe in selling generic packages. Our approach is
              built on understanding each client unique needs to deliver tailored cinematic
              solutions that resonate with their specific goals. By combining ten years of
              Brazilian creative heritage with the ambition of the Dubai market, we ensure
              that every project is a personalized masterpiece driven by deep storytelling.
            </p>
            <blockquote className="font-brand font-bold text-ink text-[22px] leading-snug border-l-4 border-tomato pl-6 my-10">
              "Truly understanding a client vision of their business is the foundation
              for creating personalized cinematic narratives that drive real growth and connection."
            </blockquote>
            <p>
              We're the team that turns 'work' into 'wow,' and we do it with smiles, laughter,
              and a touch of video wizardry. So, grab your popcorn, because this creative
              journey is going to be a blast!
            </p>
            <p>
              We bring a welcoming culture to every partnership, ensuring a process that starts
              at the very foundation of your business. Our work begins by developing a unique
              identity and strengthening your branding to create a solid market presence. From
              there, we craft a deep narrative that tells the true story of your product,
              service, or solution. By combining this human connection with high level
              production, we transform your vision into a cinematic reality that resonates
              with your audience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
