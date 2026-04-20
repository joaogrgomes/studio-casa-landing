import { Instagram, Linkedin } from "lucide-react";

const links = ["Home", "Expertise", "Projects", "People", "Contact"];

export function Footer() {
  return (
    <footer className="bg-forest text-lime px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-6 items-start">
          <div className="flex flex-col gap-2">
            <span className="font-display font-extrabold text-[22px] text-lime">studio casa</span>
            <span className="font-body text-[13px] text-olive">meaning before motion</span>
          </div>

          <ul className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="font-body text-[13px] text-lime/60 hover:text-lime transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex md:justify-end items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-forest transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-lime/30 flex items-center justify-center text-lime hover:bg-lime hover:text-forest transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-olive/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 font-mono text-[11px] tracking-[0.12em] uppercase text-olive">
          <span>© 2025 Studio CASA</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
