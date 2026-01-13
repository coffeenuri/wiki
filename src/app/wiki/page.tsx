import Link from "next/link";

function LeagueCard({
  title,
  desc,
  href,
  chips,
}: {
  title: string;
  desc: string;
  href: string;
  chips: string[];
}) {
  return (
    <Link
      href={href}
      className="group rounded-[30px] border border-white/12 bg-white/[0.06] backdrop-blur-xl
                 p-7 shadow-[0_18px_80px_rgba(0,0,0,0.35)] hover:bg-white/[0.10] transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-2xl font-extrabold">{title}</div>
          <div className="mt-2 text-sm text-white/70">{desc}</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs text-white/75"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-pink-400 via-fuchsia-400 to-indigo-400 shadow-lg" />
      </div>

      <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/90">
        Open <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}

export default function Wiki() {
  return (
    <main className="space-y-6">
      <section className="rounded-[34px] border border-white/12 bg-white/[0.06] backdrop-blur-xl
                          p-8 shadow-[0_18px_90px_rgba(0,0,0,0.4)]">
        <div className="text-xs text-white/70">
          ONE PLACE TO CHECK EVERYTHING 
        </div>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">FIRST Wiki</h1>
        <p className="mt-3 max-w-2xl text-white/70">
          Термины, награды, роли, best practices. Удобная навигация и проверка через поиск.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/wiki/search"
            className="rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400
                       px-5 py-3 text-sm font-extrabold text-black/90 shadow-lg hover:opacity-95"
          >
            Global Search
          </Link>
          <Link
            href="/"
            className="rounded-2xl border border-white/12 bg-white/[0.06]
                       px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/[0.10]"
          >
            Back Home
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <LeagueCard
          title="FLL"
          desc="Core Values • Robot Game • Innovation Project"
          href="/wiki/fll"
          chips={["Terms", "Awards", "Roles", "Best Practices", "Search"]}
        />
        <LeagueCard
          title="FTC"
          desc="Robot • Portfolio • Judging • Auto/TeleOp"
          href="/wiki/ftc"
          chips={["Terms", "Awards", "Roles", "Best Practices", "Search"]}
        />
        <LeagueCard
          title="FGC"
          desc="Impact • Documentation • Evidence • Community"
          href="/wiki/fgc"
          chips={["Terms", "Awards", "Roles", "Best Practices", "Search"]}
        />
      </section>
    </main>
  );
}