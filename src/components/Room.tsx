import type { ReactNode } from "react";
import type { Hero } from "../data/heroes";
import { AudioGuide } from "./ui/AudioGuide";

type Props = { hero: Hero; index: number };

export function Room({ hero, index }: Props) {
  return (
    <article id={hero.id} aria-labelledby={`${hero.id}-name`} className="scroll-mt-14 border-t border-line">
      <div className="wrap grid gap-10 py-20 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-20">
            <figure className="max-w-xs lg:max-w-none">
              <img
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={900}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full border border-line object-cover object-top grayscale"
              />
              <figcaption className="mt-2 text-xs text-mute">
                Chân dung {hero.name} ·{" "}
                <a href={hero.portrait.url} target="_blank" rel="noreferrer" className="underline">
                  Wikimedia Commons
                </a>
              </figcaption>
            </figure>
            <div className="mt-6 max-w-xs lg:max-w-none">
              <AudioGuide src={hero.audio} label={hero.name} text={hero.narration} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="text-sm text-mute">Phòng {index + 1}</p>
          <h3 id={`${hero.id}-name`} className="mt-1 text-5xl md:text-6xl">
            {hero.name}
          </h3>
          <p className="mt-2 text-ink-soft">
            {hero.years}
            {hero.alias && <> · {hero.alias}</>}
          </p>
          <p className="mt-5 text-lg text-ink-soft">{hero.epithet}.</p>

          <dl className="mt-6 grid gap-x-8 gap-y-1 border-y border-line py-4 text-[0.95rem] sm:grid-cols-[7rem_1fr] sm:gap-y-3">
            <dt className="text-mute">Vai trò</dt>
            <dd className="mb-2 sm:mb-0">{hero.role}</dd>
            <dt className="text-mute">Quê quán</dt>
            <dd className="mb-2 sm:mb-0">{hero.hometown}</dd>
            <dt className="text-mute">Tại Sài Gòn</dt>
            <dd>
              {hero.milestone.year}: {hero.milestone.label}
            </dd>
          </dl>

          <div className="mt-6 space-y-4 text-lg">
            {hero.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <Part title="Tiểu sử và bối cảnh">
            <p className="text-ink-soft">{hero.context}</p>
            <table className="mt-5 w-full text-left text-[0.95rem]">
              <tbody>
                {hero.timeline.map((t) => (
                  <tr key={t.date + t.text} className="border-t border-line align-top">
                    <th scope="row" className="w-28 py-2.5 pr-4 font-semibold sm:w-36">
                      {t.date}
                    </th>
                    <td className="py-2.5 text-ink-soft">{t.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Part>

          <Part title="Hoạt động và đóng góp tại Sài Gòn">
            <ol className="space-y-7">
              {hero.activities.map((a, i) => (
                <li key={a.title}>
                  <h5 className="font-display text-xl">
                    {i + 1}. {a.title}
                  </h5>
                  <p className="text-sm text-mute">
                    {a.time} · {a.place}
                  </p>
                  <p className="mt-2">{a.text}</p>
                  <p className="mt-2 text-ink-soft">
                    <span className="font-semibold text-ink">Ý nghĩa:</span> {a.meaning}
                  </p>
                </li>
              ))}
            </ol>
            {hero.quote && (
              <blockquote className="mt-8 border-l-2 border-seal pl-5">
                <p className="font-display text-2xl md:text-3xl">“{hero.quote.text}”</p>
                <footer className="mt-2 text-sm text-mute">{hero.quote.note}</footer>
              </blockquote>
            )}
          </Part>

          <Part title="Hình ảnh tư liệu">
            <div className="grid gap-6 sm:grid-cols-2">
              {hero.gallery.map((g) => (
                <figure key={g.src + g.caption}>
                  <a href={g.url} target="_blank" rel="noreferrer" className="block bg-paper-deep">
                    <img
                      src={g.src}
                      alt={g.caption}
                      loading="lazy"
                      className="aspect-[4/3] w-full border border-line object-contain grayscale"
                    />
                  </a>
                  <figcaption className="mt-2 text-sm">
                    {g.caption}
                    <span className="mt-1 block text-xs text-mute">
                      Nguồn:{" "}
                      <a href={g.url} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                        {g.source}
                      </a>
                      {g.credit && <> · {g.credit}</>}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Part>

          {hero.video && (
            <Part title="Video AI">
              <video src={hero.video.src} controls preload="none" className="w-full bg-ink" />
              <p className="mt-2 text-sm text-mute">Công cụ thực hiện: {hero.video.tool}</p>
            </Part>
          )}

          <Part title="Ý nghĩa lịch sử và vinh danh">
            <div className="space-y-4">
              {hero.significance.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-[0.95rem]">
              {hero.honors.map((h) => (
                <li key={h.name}>
                  <span className="font-semibold">
                    {h.name}
                  </span>
                  <span className="text-ink-soft">: {h.note}</span>
                </li>
              ))}
            </ul>
          </Part>

          {hero.notes.length > 0 && (
            <Part title="Lưu ý tư liệu">
              <ul className="list-disc space-y-1.5 pl-5 text-[0.95rem] text-ink-soft">
                {hero.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Part>
          )}

          <Part title="Nguồn tham khảo">
            <ol className="list-decimal space-y-2 pl-5 text-[0.95rem]">
              {hero.sources.map((s) => (
                <li key={s.url + s.title}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="underline decoration-line hover:decoration-ink">
                    {s.title}
                  </a>
                  <span className="text-mute">
                    {" "}
                    – {s.publisher}
                    {s.date && <>, {s.date}</>}
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-mute">Xem thêm ảnh tại nguồn chính thống:</p>
            <ul className="mt-1 space-y-1 text-sm">
              {hero.documents.map((d) => (
                <li key={d.url + d.title}>
                  <a href={d.url} target="_blank" rel="noreferrer" className="underline decoration-line hover:decoration-ink">
                    {d.title}
                  </a>
                  <span className="text-mute"> – {d.publisher}</span>
                </li>
              ))}
            </ul>
          </Part>
        </div>
      </div>
    </article>
  );
}

function Part({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h4 className="mb-4 border-b border-ink pb-2 text-2xl">{title}</h4>
      {children}
    </section>
  );
}
