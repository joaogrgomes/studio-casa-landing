import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
];

export function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="nav-pill flex items-center gap-2 sm:gap-6 py-2 pl-5 pr-2 w-full max-w-3xl relative">
        <Link to="/">
          <img
            src="/logo-reduzida-preto.png"
            alt="Casa Studio"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-5 mx-auto">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="font-brand text-[13px] text-muted hover:text-ink transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-beige transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <a href="mailto:create@casastudioae.com" className="hidden md:inline-flex btn btn-primary !py-2 !px-4 ml-auto md:ml-0 text-[13px]">
          Start a Project <ArrowUpRight size={14} strokeWidth={2.25} />
        </a>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-[calc(100%+10px)] bg-beige border border-ink/10 rounded-[20px] shadow-lg p-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={closeMobileMenu}
                    className="block rounded-[12px] px-3 py-2 font-brand text-[14px] text-ink hover:bg-forest hover:text-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:create@casastudioae.com"
              onClick={closeMobileMenu}
              className="btn btn-primary w-full mt-4 !py-2.5 !px-4 text-[13px]"
            >
              Start a Project <ArrowUpRight size={14} strokeWidth={2.25} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
