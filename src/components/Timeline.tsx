import { heroes } from "../data/heroes";

export function Timeline() {
  return (
    <section id="dong-thoi-gian" className="scroll-mt-14 border-t border-line">
      <div className="wrap py-20">
        <h2 className="text-4xl md:text-5xl">Dòng thời gian</h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Các phòng trưng bày được xếp theo mốc hoạt động tiêu biểu của từng người tại Sài Gòn.
        </p>
        <ol className="mt-10 border-t border-ink">
          {heroes.map((h, i) => (
            <li key={h.id} className="border-b border-line">
              <a href={`#${h.id}`} className="group grid gap-1 py-4 sm:grid-cols-[6rem_16rem_1fr] sm:items-baseline sm:gap-6">
                <span className="font-display text-3xl text-seal">{h.milestone.year}</span>
                <span className="font-display text-xl group-hover:underline">
                  {h.name}
                  <span className="ml-2 font-sans text-sm text-mute">Phòng {i + 1}</span>
                </span>
                <span className="text-ink-soft">{h.milestone.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
