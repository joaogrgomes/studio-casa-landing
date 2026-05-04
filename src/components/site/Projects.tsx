import { ArrowRight, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    n: '01', title: 'Fursan MMA',       client: 'FURSAN',            cat: 'Event',      year: '2024',
    body: 'Building the future of combat sports in the UAE.',
    bg: '#2A332F', numColor: '#E6E57C', iconBg: '#DD4B2C', iconColor: '#EAE5D1',
  },
  {
    n: '02', title: 'Purpose',          client: 'GRID',              cat: 'Lifestyle',  year: '2024',
    body: 'Narrative lifestyle production exploring urban identity.',
    bg: '#E6E57C', numColor: '#2A332F', iconBg: '#2A332F', iconColor: '#E6E57C',
  },
  {
    n: '03', title: 'Terra Verde',      client: 'TERRA VERDE',       cat: 'Corporate',  year: '2023',
    body: 'The future of sustainable agriculture, visualized.',
    bg: '#2A332F', numColor: '#E6E57C', iconBg: '#DD4B2C', iconColor: '#EAE5D1',
  },
  {
    n: '04', title: 'Desert Mirage',    client: 'COUTURE CREATIONS', cat: 'Fashion',    year: '2024',
    body: 'Fashion & lifestyle campaign set in the Dubai desert.',
    bg: '#DD4B2C', numColor: '#EAE5D1', iconBg: '#2A332F', iconColor: '#E6E57C',
  },
  {
    n: '05', title: 'Sustentabilidade', client: 'AGROBIOLOGICA',     cat: 'Corporate',  year: '2023',
    body: 'Scaling innovation in biological agriculture.',
    bg: '#EAE5D1', numColor: '#2A332F', iconBg: '#DD4B2C', iconColor: '#EAE5D1',
  },
  {
    n: '06', title: 'Inside Muay Thai', client: 'INSIDE MUAY THAI',  cat: 'Interview',  year: '2024',
    body: 'Brand promotion through authentic athlete narratives.',
    bg: '#2A332F', numColor: '#E6E57C', iconBg: '#DD4B2C', iconColor: '#EAE5D1',
  },
  {
    n: '07', title: 'The Art of the Intro',     client: 'UAE WARRIORS', cat: 'Event',   year: '2024',
    body: "Cinematic intro films for MMA's biggest stage.",
    bg: '#E6E57C', numColor: '#2A332F', iconBg: '#2A332F', iconColor: '#E6E57C',
  },
  {
    n: '08', title: 'Athlete Walkout Films',    client: 'UAE WARRIORS', cat: 'Event',   year: '2023',
    body: 'High-energy walkout & intro production.',
    bg: '#DD4B2C', numColor: '#EAE5D1', iconBg: '#2A332F', iconColor: '#E6E57C',
  },
]

export function Projects() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 px-6 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 30% 80%, #E6E57C 0%, #EAE5D1 60%)' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-5 max-w-2xl">
            <span className="pill pill-forest w-fit flex items-center gap-2">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E6E57C', display: 'inline-block' }} />
              All Projects
            </span>
            <p className="eyebrow">03 — PORTFOLIO</p>
            <h1 className="display" style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}>
              Every project<br />starts with a vision.
            </h1>
            <p className="font-brand text-[15px] leading-relaxed" style={{ color: '#596A5D' }}>
              From brand strategy to cinematic production — a complete view of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.n}
              className="reveal flex flex-col overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: '0.5px solid rgba(42,51,47,0.12)',
                borderRadius: 20,
                transitionDelay: `${i * 80}ms`,
                transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(42,51,47,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div className="relative flex items-center justify-center" style={{ height: 220, background: p.bg }}>
                <span
                  className="font-mono font-bold select-none"
                  style={{ fontSize: 80, color: p.numColor, opacity: 0.18, lineHeight: 1 }}
                >
                  {p.n}
                </span>
                <div className="icon-circle absolute top-4 right-4" style={{ background: p.iconBg }}>
                  <ArrowUpRight size={16} color={p.iconColor} strokeWidth={2.5} />
                </div>
              </div>

              <div className="flex flex-col gap-3 p-6">
                <p className="eyebrow">{p.client} · {p.year}</p>
                <h3 className="font-brand font-bold text-[20px] leading-tight" style={{ color: '#1A1F1C' }}>{p.title}</h3>
                <p className="font-brand text-[13px] leading-relaxed" style={{ color: '#596A5D' }}>{p.body}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-2">
                    <span className="pill" style={{ fontSize: 11, padding: '3px 10px' }}>{p.cat}</span>
                    <span className="pill" style={{ fontSize: 11, padding: '3px 10px' }}>{p.year}</span>
                  </div>
                  <a href="#" className="btn btn-secondary" style={{ fontSize: 12, padding: '7px 16px' }}>
                    Ver projeto <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
