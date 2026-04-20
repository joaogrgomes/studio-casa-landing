import { ArrowUpRight } from "lucide-react";

const links = ["Home", "Expertise", "Projects", "People", "Contact"];

export function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="nav-pill flex items-center gap-2 sm:gap-6 py-2 pl-5 pr-2 w-full max-w-3xl">
        <a href="#" className="font-display font-extrabold text-[15px] tracking-tight text-ink whitespace-nowrap">
          studio casa
        </a>
        <ul className="hidden md:flex items-center gap-5 mx-auto">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-body text-[13px] text-olive hover:text-ink transition-colors"
              >
                {l}
              </a>
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
