import { project, team, tools } from "../data/site";

export function Team() {
  return (
    <footer id="nhom" className="scroll-mt-14 bg-ink text-paper">
      <div className="wrap grid gap-12 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-4xl">Nhóm thực hiện</h2>
          <p className="mt-3 text-paper/80">
            {team.school} · {team.className}
          </p>
          <ul className="mt-6 space-y-2">
            {team.members.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl">Công cụ thực hiện</h2>
          <dl className="mt-6 space-y-4 text-[0.95rem]">
            {tools.map((t) => (
              <div key={t.task}>
                <dt className="font-semibold">{t.task}</dt>
                <dd className="text-paper/75">{t.tool}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="wrap flex flex-wrap justify-between gap-4 border-t border-paper/20 py-6 text-sm text-paper/60">
        <p>{project.title}</p>
        <a href="#top" className="hover:text-paper">
          Về đầu trang
        </a>
      </div>
    </footer>
  );
}
