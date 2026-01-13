import Link from "next/link";

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/85
                 hover:bg-white/[0.08] hover:text-white transition"
    >
      {label}
    </Link>
  );
}

function GroupTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 pt-5 pb-2 text-xs font-bold tracking-wider text-white/55">
      {children}
    </div>
  );
}

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <aside className="lg:sticky lg:top-[88px] h-fit">
        <div className="rounded-[28px] border border-white/12 bg-white/[0.06] backdrop-blur-xl
                        shadow-[0_18px_80px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="p-5 border-b border-white/10">
            <div className="text-sm font-extrabold">Wiki Navigation</div>
            <div className="mt-1 text-xs text-white/65">
              Быстро перейти в лигу, раздел и поиск.
            </div>
            <Link
              href="/wiki/search"
              className="mt-4 block rounded-2xl bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400
                         px-4 py-3 text-sm font-extrabold text-black/90 shadow-lg hover:opacity-95"
            >
              Global Search →
            </Link>
          </div>

          <div className="p-2">
            <GroupTitle>LEAGUES</GroupTitle>
            <NavItem href="/wiki/fll" label="FLL" />
            <NavItem href="/wiki/ftc" label="FTC" />
            <NavItem href="/wiki/fgc" label="FGC" />

            <GroupTitle>SHORTCUTS</GroupTitle>
            <NavItem href="/wiki/ftc/awards" label="FTC Awards" />
            <NavItem href="/wiki/fll/terms" label="FLL Terms" />
            <NavItem href="/wiki/fgc/best-practices" label="FGC Best Practices" />
          </div>

          <div className="p-5 border-t border-white/10 text-xs text-white/60">
          </div>
        </div>
      </aside>

      {/* Content */}
      <section className="min-w-0">{children}</section>
    </div>
  );
}