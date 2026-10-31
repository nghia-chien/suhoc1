import { heroes } from "../data/heroes";
import { honoring } from "../data/site";

export function Streets() {
  return (
    <section id="ten-duong" className="scroll-mt-14 bg-paper-deep">
      <div className="wrap py-20">
        <h2 className="text-4xl md:text-5xl">{honoring.title}</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">{honoring.lede}</p>
        <ul className="mt-10 grid border-t border-ink sm:grid-cols-2 sm:gap-x-10">
          {heroes.map((h) => {
            return (
              <li key={h.id} className="border-b border-line">
                <a href={`#${h.id}`} className="group block py-4">
                  <span className="font-display text-2xl group-hover:underline md:text-3xl">
                    Đường {h.street.name}
                  </span>
                  <span className="block text-sm text-ink-soft">{h.street.area}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
