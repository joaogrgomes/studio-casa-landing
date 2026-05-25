import { Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/#services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-forest text-lime px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div className="flex flex-col gap-2 items-start">
            <img
              src="/logo-reduzida-preto.png"
              alt="Casa Studio"
              className="h-7 w-auto object-contain self-start"
              style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(18%) saturate(500%) hue-rotate(25deg) brightness(105%)' }}
            />
            <span className="font-brand text-[13px] text-lime/70">meaning before motion</span>
          </div>

          <ul className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="font-brand text-[13px] text-lime/60 hover:text-lime transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col md:items-end gap-3">
            <span className="font-brand text-[13px] text-lime/70">Dubai, UAE</span>
            <a href="mailto:create@casastudioae.com" className="font-brand text-[13px] text-lime/70 hover:text-lime transition-colors">create@casastudioae.com</a>
            <a href="tel:+971581769204" className="font-brand text-[13px] text-lime/70 hover:text-lime transition-colors">(+971) 58 176 9204</a>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/casa.studioae/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-forest transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.youtube.com/@casastudioae" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-forest transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lime/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-lime/70">
          <span>© 2026 Casa Studio · All rights reserved</span>
          <span>Casa.studio</span>
        </div>
      </div>
    </footer>
  );
}
