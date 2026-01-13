"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Fuse from "fuse.js";

type League = "FLL" | "FTC" | "FGC";
type Section = "terms" | "awards" | "roles" | "best-practices";

type Item = {
  league: League;
  section: Section;
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

const DATA: Item[] = [
  // FTC
  { league: "FTC", section: "awards", title: "Inspire Award", description: "Главная награда FTC: баланс инженерии, робота, outreach и культуры.", href: "/wiki/ftc/awards", keywords: ["inspire", "award", "judging"] },
  { league: "FTC", section: "awards", title: "Sustain Award", description: "Устойчивый долгосрочный вклад в сообщество FIRST.", href: "/wiki/ftc/awards", keywords: ["sustain", "outreach", "impact"] },
  { league: "FTC", section: "awards", title: "Reach Award", description: "Масштабный outreach и влияние за пределами команды/региона.", href: "/wiki/ftc/awards", keywords: ["reach", "impact", "community"] },
  { league: "FTC", section: "terms", title: "Engineering Notebook", description: "Документация инженерного процесса и итераций.", href: "/wiki/ftc/terms", keywords: ["notebook", "documentation"] },

  // FLL
  { league: "FLL", section: "terms", title: "Core Values", description: "Базовые ценности FLL: уважение, командность, честность.", href: "/wiki/fll/terms", keywords: ["values", "teamwork", "gp"] },
  { league: "FLL", section: "terms", title: "Innovation Project", description: "Проект: проблема → исследование → решение → impact.", href: "/wiki/fll/terms", keywords: ["project", "research", "solution"] },

  // FGC
  { league: "FGC", section: "terms", title: "Impact", description: "Измеримое влияние команды на сообщество.", href: "/wiki/fgc/terms", keywords: ["impact", "metrics"] },
  { league: "FGC", section: "terms", title: "Evidence", description: "Доказательства: цифры, ссылки, фото/видео, артефакты.", href: "/wiki/fgc/terms", keywords: ["evidence", "proof"] },
];

function pill(active: boolean) {
  return `rounded-full border px-4 py-2 text-sm font-semibold transition ${
    active
      ? "border-white/20 bg-white/15 text-white"
      : "border-white/12 bg-white/[0.06] text-white/75 hover:bg-white/10"
  }`;
}

function sectionLabel(s: Section) {
  if (s === "terms") return "Terms";
  if (s === "awards") return "Awards";
  if (s === "roles") return "Roles";
  return "Best Practices";
}

export default function GlobalSearch() {
  const params = useSearchParams();
  const initialQ = params.get("q") ?? "";

  const [q, setQ] = useState(initialQ);
  const [league, setLeague] = useState<League | "ALL">("ALL");

  const fuse = useMemo(() => {
    return new Fuse(DATA, {
      keys: ["title", "description", "keywords", "league", "section"],
      threshold: 0.35,
      ignoreLocation: true,
    });
  }, []);

  const results = useMemo(() => {
    const query = q.trim();
    const base = query ? fuse.search(query).map((r) => r.item) : [];
    const filtered = league === "ALL" ? base : base.filter((x) => x.league === league);
    return filtered.slice(0, 30);
  }, [q, league, fuse]);

  return (
    <main className="space-y-6">
      <section className="rounded-[34px] border border-white/12 bg-white/[0.06] backdrop-blur-xl
                          p-7 shadow-[0_18px_90px_rgba(0,0,0,0.4)]">
        <div className="text-xs text-white/70">GLOBAL SEARCH</div>
        <h1 className="mt-2 text-3xl font-extrabold">Find anything fast</h1>
        <p className="mt-2 text-sm text-white/70">
          Пиши как в голове: “judging”, “core values”, “sustain”, “notebook”, “project”.
        </p>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white
                       placeholder:text-white/45 outline-none focus:border-white/25"
          />

          <div className="flex flex-wrap gap-2">
            <button className={pill(league === "ALL")} onClick={() => setLeague("ALL")}>ALL</button>
            <button className={pill(league === "FLL")} onClick={() => setLeague("FLL")}>FLL</button>
            <button className={pill(league === "FTC")} onClick={() => setLeague("FTC")}>FTC</button>
            <button className={pill(league === "FGC")} onClick={() => setLeague("FGC")}>FGC</button>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        {q.trim() === "" ? (
          <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-6 text-white/75">
            Введи запрос — и результаты появятся карточками.
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-6 text-white/75">
            Ничего не найдено. Попробуй другое слово.
          </div>
        ) : (
          results.map((r) => (
            <Link
              key={`${r.league}-${r.section}-${r.title}`}
              href={r.href}
              className="rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur-xl
                         shadow-[0_14px_55px_rgba(0,0,0,0.25)] hover:bg-white/[0.10] transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-lg font-extrabold">{r.title}</div>
                <div className="flex gap-2">
                  <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs text-white/75">
                    {r.league}
                  </span>
                  <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs text-white/75">
                    {sectionLabel(r.section)}
                  </span>
                </div>
              </div>
              <div className="mt-2 text-sm text-white/70">{r.description}</div>
              <div className="mt-4 inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold">
                Open →
              </div>
            </Link>
          ))
        )}
      </section>
    </main>
  );
}