import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = ["Home", "Expertise", "Projects", "People", "Contact"];

export function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="nav-pill flex items-center gap-2 sm:gap-6 py-2 pl-5 pr-2 w-full max-w-3xl">
        <a href="#">
          <img
            src="/logo-reduzida-preto.png"
            alt="Studio CASA"
            className="h-8 w-auto object-contain"
          />
        </a>
        <ul className="hidden md:flex items-center gap-5 mx-auto">
          {links.map((l) => (
            <li key={l}>
              {l === "Projects" ? (
                <Link to="/projects" className="font-brand text-[13px] text-muted hover:text-ink transition-colors">
                  {l}
                </Link>
              ) : (
                <a
                  href={`#${l.toLowerCase()}`}
                  className="font-brand text-[13px] text-muted hover:text-ink transition-colors"
                >
                  {l}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary !py-2 !px-4 ml-auto md:ml-0 text-[13px]">
          Hire <ArrowUpRight size={14} strokeWidth={2.25} />
        </a>
      </nav>
    </header>
  );
}
