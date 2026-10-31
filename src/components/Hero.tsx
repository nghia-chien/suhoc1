import { heroes } from "../data/heroes";
import { method, project } from "../data/site";
import { AudioGuide } from "./ui/AudioGuide";

export function Hero() {
  return (
    <section id="top" className="wrap pt-14 pb-20 md:pt-20">
      <p className="text-sm text-mute">{project.info}</p>
      <h1 className="mt-4 max-w-4xl text-5xl leading-[1.12] md:text-7xl md:leading-[1.08]">{project.title}</h1>
      <p className="mt-3 text-xl text-ink-soft md:text-2xl">{project.subtitle}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-lg">{project.intro}</p>
          <div className="mt-6 max-w-xl">
            <AudioGuide src={project.audio} label="bảo tàng" text={project.narration} />
          </div>
        </div>
        <div className="md:col-span-5">
          <h2 className="text-xl">Cách chúng em chọn tư liệu</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.95rem] text-ink-soft">
            {method.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </div>

      <ol className="mt-14 grid grid-cols-3 gap-3 md:grid-cols-6">
        {heroes.map((h) => (
          <li key={h.id}>
            <a href={`#${h.id}`} className="group block">
              <img
                src={h.portrait.src}
                alt={h.portrait.alt}
                width={900}
                height={1200}
                className="aspect-[3/4] w-full border border-line object-cover object-top grayscale"
              />
              <span className="mt-2 block text-sm leading-snug font-semibold group-hover:underline">{h.name}</span>
              <span className="block text-xs text-mute">{h.years}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
