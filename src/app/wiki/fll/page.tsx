import Link from "next/link";

function SectionCard({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06]"
    >
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm text-zinc-400">{desc}</div>
      <div className="mt-4 text-sm text-red-300">Open →</div>
    </Link>
  );
}

export default function FLL() {
  return (
    <main className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1>FLL</h1>
          <p>Быстрый доступ к разделам + поиск по FLL.</p>
        </div>

        <Link
          href="/wiki/fll/search"
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10"
        >
          Search FLL
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SectionCard title="Terms" desc="Core Values, Robot Game, Project" href="/wiki/fll/terms" />
        <SectionCard title="Awards" desc="Main awards and what they mean" href="/wiki/fll/awards" />
        <SectionCard title="Roles" desc="Who does what in the team" href="/wiki/fll/roles" />
        <SectionCard title="Best Practices" desc="How to win + be stable" href="/wiki/fll/best-practices" />
      </div>

      <Link className="text-sm text-zinc-300 hover:text-white" href="/wiki">
        ← Back to Wiki
      </Link>
    </main>
  );
}