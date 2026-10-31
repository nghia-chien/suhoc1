import { useState } from "react";
import { nav, project } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg">
          {project.title}
        </a>
        <nav aria-label="Mục lục" className="hidden md:block">
          <ul className="flex gap-6 text-sm text-ink-soft">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-ink hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="-mr-2 p-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Đóng" : "Mục lục"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mục lục" className="border-t border-line md:hidden">
          <ul className="wrap py-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)} className="block py-3">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
