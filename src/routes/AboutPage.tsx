import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { AboutContent } from '@/components/site/AboutContent'

const navLinks = [
  { label: 'Home',     to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Visuals',  to: '#' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '#services' },
  { label: 'Contact',  to: '#contact' },
]

function DarkNav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6"
      style={{
        background: 'rgba(13,13,13,0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-brand font-black text-white text-xl leading-none">CASA</span>
          <span className="font-brand text-white/40 text-sm">studio</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="font-brand text-[13px] transition-colors"
                style={{
                  color: label === 'About' ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  borderBottom: label === 'About' ? '1.5px solid #dd4b2c' : 'none',
                  paddingBottom: label === 'About' ? 2 : undefined,
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary !py-2 !px-4 text-[13px]">
          Hire <ArrowUpRight size={14} strokeWidth={2.25} />
        </a>
      </nav>
    </header>
  )
}

export default function AboutPage() {
  return (
    <>
      <DarkNav />
      <AboutContent />
    </>
  )
}
