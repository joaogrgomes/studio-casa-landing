import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number], delay },
})

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

const values = [
  {
    n: '01',
    title: 'Strategic Personalization',
    body: 'We develop tailored solutions that range from building brand identity to executing data driven marketing funnels.',
    align: 'left',
  },
  {
    n: '02',
    title: 'Technical Quality',
    body: 'We utilize professional pocket cinema cameras and refined techniques to deliver high end visual results for every project.',
    align: 'right',
  },
  {
    n: '03',
    title: 'Narrative Excellence',
    body: 'We prioritize deep storytelling and authentic narratives over generic content packages to create true emotional impact.',
    align: 'left',
  },
  {
    n: '04',
    title: 'Cultural Heritage',
    body: 'We integrate ten years of Brazilian creative soul and welcoming culture into the ambitious Dubai market.',
    align: 'right',
  },
]

const team = [
  {
    name: 'Eduardo Hanke',
    role: 'ACCOUNT MANAGER',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Marcelo Lourenço',
    role: 'VIDEO DIRECTOR',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
  {
    name: 'Viniccius Redondano',
    role: 'CREATIVE DIRECTOR',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
]

const logos = ['FURSAN', 'FRANCIS LAMAS', 'THE RED DOOR', 'OLD WARRIORS', 'AGRO', 'GRID.EA', 'UAE WARRIORS', 'CASA STUDIO']
const logoSizes = [18, 13, 15, 13, 18, 15, 13, 18]

const quickLinks = ['HOME', 'ABOUT', 'SERVICES', 'CONTACT']

export function AboutContent() {
  return (
    <div style={{ background: '#0d0d0d', color: '#ffffff' }}>

      {/* ─── SECTION 1 — Hero ─────────────────────────────────────── */}
      <section className="min-h-screen flex items-center px-6 py-32" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto w-full flex gap-8 items-center">

          {/* Vertical SCROLL label */}
          <div
            className="hidden lg:flex shrink-0 items-center justify-center"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              color: '#5a6b61',
              fontSize: 10,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'var(--font-mono)',
              userSelect: 'none',
            }}
          >
            SCROLL
          </div>

          <div className="flex-1 grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div {...fadeUp(0)} className="flex flex-col gap-6">
              <h1
                className="font-brand font-black text-white"
                style={{ fontSize: 'clamp(56px, 8vw, 96px)', letterSpacing: '-0.025em', lineHeight: 1.0 }}
              >
                About Us
              </h1>
              <p className="font-brand text-[15px] leading-relaxed max-w-md" style={{ color: '#a0a8a2' }}>
                Casa Studio is an audiovisual production house and creative agency based in Dubai that merges cinematic aesthetics with business strategy. With over a decade of international experience and roots in Brazil, we transform concepts into high impact visual narratives for brands seeking exclusivity and authority.
              </p>
            </motion.div>

            {/* Right — wordmark */}
            <motion.div {...fadeUp(0.15)} className="flex items-center justify-center">
              <span
                className="font-brand font-black text-white"
                style={{ fontSize: 'clamp(48px, 7vw, 80px)', letterSpacing: '-0.025em', opacity: 0.9 }}
              >
                .studio
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2 — Manifesto ────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeUp()}
            style={{
              background: '#111111',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(32px, 5vw, 64px)',
            }}
          >
            <p
              className="font-brand font-bold text-white"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)', lineHeight: 1.4, maxWidth: 820 }}
            >
              We're the storytellers, visionaries, and creative dreamers who turn your{' '}
              <span style={{ color: '#e6e57c' }}>ideas into cinematic adventures.</span>
              {' '}With us, work feels like play, and every project is a chance to{' '}
              <span style={{ color: '#dd4b2c' }}>make magic</span>
              {' '}happen.
            </p>
            <div className="flex justify-center mt-14">
              <img
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?w=480&q=80"
                alt="Casa Studio team at work"
                style={{ width: 280, height: 280, borderRadius: 12, objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3 — Our Values ───────────────────────────────── */}
      <section className="px-6 py-24" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto">

          <motion.div {...fadeUp()} className="text-center mb-20">
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: 10, letterSpacing: '0.2em', color: '#dd4b2c' }}
            >
              OUR VALUES
            </p>
            <h2
              className="font-brand font-bold text-white"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              The Secret Sauce in Every StoryStream Creation!
            </h2>
          </motion.div>

          <div className="flex flex-col gap-16">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                {...fadeUp(i * 0.1)}
                className="relative"
                style={{ textAlign: v.align as 'left' | 'right' }}
              >
                <span
                  aria-hidden
                  className="absolute font-brand font-black select-none pointer-events-none"
                  style={{
                    fontSize: 120,
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.04)',
                    lineHeight: 1,
                    top: -16,
                    [v.align === 'left' ? 'left' : 'right']: 0,
                    zIndex: 0,
                  }}
                >
                  {v.n}
                </span>
                <div
                  className="relative z-10"
                  style={{
                    maxWidth: 520,
                    ...(v.align === 'right' ? { marginLeft: 'auto' } : {}),
                  }}
                >
                  <h3
                    className="font-brand font-bold text-white mb-3"
                    style={{ fontSize: 28, letterSpacing: '-0.015em' }}
                  >
                    {v.title}
                  </h3>
                  <p className="font-brand text-[15px] leading-relaxed" style={{ color: '#5a6b61' }}>
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 4 — Team ─────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto">

          <motion.div {...fadeUp()} className="mb-14">
            <h2
              className="font-brand font-bold text-white"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '-0.02em' }}
            >
              Meet our Team!
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fadeUp(i * 0.1)} className="flex flex-col gap-3">
                <div
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full"
                    style={{ height: 300, objectFit: 'cover', objectPosition: 'top' }}
                  />
                  <div className="p-5">
                    <p className="font-brand font-semibold text-white text-[16px]">{member.name}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.1em] mt-1" style={{ color: '#5a6b61' }}>
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {[
                    { icon: <InstagramIcon />, label: 'INSTAGRAM' },
                    { icon: <LinkedinIcon />, label: 'LINKEDIN' },
                  ].map(({ icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      className="flex items-center justify-between font-brand text-[11px] text-white transition-opacity hover:opacity-70"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 9999,
                        padding: '10px 16px',
                      }}
                    >
                      <span className="flex items-center gap-2">{icon}{label}</span>
                      <span>→</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 5 — Client Logos ─────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              background: '#111111',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(32px, 5vw, 48px)',
              overflow: 'hidden',
            }}
          >
            <motion.h2
              {...fadeUp()}
              className="font-brand font-bold text-white text-center mb-12"
              style={{ fontSize: 'clamp(24px, 3.5vw, 40px)', letterSpacing: '-0.02em' }}
            >
              Our Creative Playground: Where Brands Shine!
            </motion.h2>

            <motion.div {...fadeUp(0.1)} className="flex flex-wrap gap-3 justify-center">
              {logos.map((logo, i) => (
                <span
                  key={logo}
                  className="font-brand font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8,
                    padding: '12px 20px',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: logoSizes[i],
                    letterSpacing: '-0.01em',
                  }}
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6 — How We Work ──────────────────────────────── */}
      <section className="px-6 py-24" style={{ background: '#0d0d0d' }}>
        <div className="max-w-6xl mx-auto">
          <div
            style={{
              background: '#111111',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.08)',
              padding: 'clamp(32px, 5vw, 48px)',
            }}
          >
            <motion.h2
              {...fadeUp()}
              className="font-brand font-bold text-white mb-10"
              style={{ fontSize: 'clamp(28px, 4vw, 40px)', letterSpacing: '-0.02em' }}
            >
              How We Work
            </motion.h2>

            <div className="flex flex-col gap-8" style={{ maxWidth: 620 }}>
              <motion.p
                {...fadeUp(0.05)}
                className="font-brand text-[15px]"
                style={{ color: '#a0a8a2', lineHeight: 1.8 }}
              >
                At Casa Studio, we do not believe in selling generic packages. Our approach is built on understanding each client unique needs to deliver tailored cinematic solutions that resonate with their specific goals. By combining ten years of Brazilian creative heritage with the ambition of the Dubai market, we ensure that every project is a personalized masterpiece driven by deep storytelling.
              </motion.p>

              <motion.blockquote
                {...fadeUp(0.1)}
                className="font-brand font-semibold text-white"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: 1.5,
                  borderLeft: '2px solid #dd4b2c',
                  paddingLeft: 24,
                }}
              >
                "Truly understanding a client vision of their business is the foundation for creating personalized cinematic narratives that drive real growth and connection."
              </motion.blockquote>

              <motion.p
                {...fadeUp(0.15)}
                className="font-brand text-[15px]"
                style={{ color: '#a0a8a2', lineHeight: 1.8 }}
              >
                We're the team that turns 'work' into 'wow,' and we do it with smiles, laughter, and a touch of video wizardry. So, grab your popcorn, because this creative journey is going to be a blast!
              </motion.p>

              <motion.p
                {...fadeUp(0.2)}
                className="font-brand text-[15px]"
                style={{ color: '#a0a8a2', lineHeight: 1.8 }}
              >
                We bring a welcoming culture to every partnership, ensuring a process that starts at the very foundation of your business. Our work begins by developing a unique identity and strengthening your branding to create a solid market presence. From there, we craft a deep narrative that tells the true story of your product, service, or solution. By combining this human connection with high level production, we transform your vision into a cinematic reality that resonates with your audience.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7 — CTA ──────────────────────────────────────── */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeUp()}
            className="text-center"
            style={{
              background: 'radial-gradient(ellipse at 50% 100%, #dd4b2c 0%, #1a0a05 60%, #0d0d0d 100%)',
              borderRadius: 24,
              padding: 'clamp(48px, 7vw, 80px) clamp(24px, 5vw, 48px)',
            }}
          >
            <h2
              className="font-brand font-black text-white mx-auto"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.2, letterSpacing: '-0.025em', maxWidth: 680 }}
            >
              Ready to build something that lasts?
            </h2>
            <p className="font-brand text-[16px] mt-4 mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Let's create with intention.
            </p>
            <a
              href="#contact"
              className="font-brand font-semibold text-white inline-block transition-transform"
              style={{
                background: '#dd4b2c',
                borderRadius: 9999,
                padding: '16px 40px',
                fontSize: 16,
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#c03e22'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '#dd4b2c'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
              }}
            >
              Start a Project →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 8 — Footer ───────────────────────────────────── */}
      <footer
        className="px-6 py-16"
        style={{ background: '#0d0d0d', borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="flex flex-col gap-2">
              {['Dubai, UAE', 'Email: create@casastudioae.com', 'Phone: (+971) 58 176 9204'].map(line => (
                <p key={line} className="font-brand text-[13px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {line}
                </p>
              ))}
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Quick Links
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {quickLinks.map(l => (
                  <li key={l}>
                    <a
                      href={l === 'HOME' ? '/' : `#${l.toLowerCase()}`}
                      className="font-brand text-[13px] font-medium transition-opacity hover:opacity-100"
                      style={{ color: l === 'ABOUT' ? '#dd4b2c' : 'rgba(255,255,255,0.5)' }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex items-center justify-between pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <a
              href="#"
              className="flex items-center gap-2 font-brand text-[11px] text-white transition-opacity hover:opacity-70"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 9999,
                padding: '10px 16px',
              }}
            >
              <YoutubeIcon />
              YOUTUBE
              <span>→</span>
            </a>
            <p className="font-brand text-[12px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              ©Casa.studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
