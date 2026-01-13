"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  title: string;
  section: "terms" | "awards" | "roles" | "best-practices";
  href: string;
  description: string;
  keywords: string[];
};

const DATA: Item[] = [
  // TERMS
  {
    title: "Gracious Professionalism",
    section: "terms",
    href: "/wiki/ftc/terms",
    description: "Честная конкуренция, уважение и помощь другим.",
    keywords: ["gp", "gracious", "professionalism", "ценности", "этика"],
  },
  {
    title: "Coopertition",
    section: "terms",
    href: "/wiki/ftc/terms",
    description: "Соревнование + сотрудничество между командами.",
    keywords: ["coopertition", "cooperation", "сотрудничество"],
  },
  {
    title: "Engineering Notebook",
    section: "terms",
    href: "/wiki/ftc/terms",
    description: "Документация инженерного процесса и итераций.",
    keywords: ["notebook", "engineering", "дневник", "итерации", "документация"],
  },

  // AWARDS
  {
    title: "Inspire Award",
    section: "awards",
    href: "/wiki/ftc/awards",
    description: "Главная награда: баланс инженерии, робота, outreach и культуры.",
    keywords: ["inspire", "инспайр", "главная награда"],
  },
  {
    title: "Think Award",
    section: "awards",
    href: "/wiki/ftc/awards",
    description: "Инженерный процесс, тестирование, расчёты, документация.",
    keywords: ["think", "системность", "тесты", "расчеты"],
  },
  {
    title: "Control Award",
    section: "awards",
    href: "/wiki/ftc/awards",
    description: "Программирование, автоном, датчики, стабильность.",
    keywords: ["control", "код", "autonomous", "датчики", "pid"],
  },
  {
    title: "Sustain Award",
    section: "awards",
    href: "/wiki/ftc/awards",
    description: "Устойчивый долгосрочный вклад в сообщество FIRST.",
    keywords: ["sustain", "устойчивость", "long-term", "community"],
  },
  {
    title: "Reach Award",
    section: "awards",
    href: "/wiki/ftc/awards",
    description: "Масштабный outreach и влияние за пределами команды/региона.",
    keywords: ["reach", "outreach", "масштаб", "влияние"],
  },

  // ROLES
  {
    title: "Programmer",
    section: "roles",
    href: "/wiki/ftc/roles",
    description: "Autonomous/TeleOp, датчики, стабильность, тестирование.",
    keywords: ["programmer", "код", "autonomous", "teleop"],
  },
  {
    title: "Engineering Notebook Lead",
    section: "roles",
    href: "/wiki/ftc/roles",
    description: "Ведёт notebook: идеи, тесты, решения, итерации.",
    keywords: ["notebook lead", "документация", "инженерный дневник"],
  },
  {
    title: "Outreach Lead",
    section: "roles",
    href: "/wiki/ftc/roles",
    description: "Менторство, мероприятия, коллаборации, импакт.",
    keywords: ["outreach lead", "менторство", "impact", "community"],
  },

  // BEST PRACTICES
  {
    title: "Judging Interview",
    section: "best-practices",
    href: "/wiki/ftc/best-practices",
    description: "Коротко, честно, с примерами и фактами.",
    keywords: ["interview", "judging", "судьи", "портфолио"],
  },
  {
    title: "Engineering Process",
    section: "best-practices",
    href: "/wiki/ftc/best-practices",
    description: "Идея → прототип → тест → анализ → улучшение.",
    keywords: ["process", "iteration", "прототип", "тестирование"],
  },
];

function sectionLabel(s: Item["section"]) {
  if (s === "terms") return "Terms";
  if (s === "awards") return "Awards";
  if (s === "roles") return "Roles";
  return "Best Practices";
}

export default function FTCSearchPage() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];

    return DATA.filter((x) => {
      const hay = `${x.title} ${x.description} ${x.keywords.join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q]);

  return (
    <main style={{ padding: 40 }}>
      <h1>FTC — Search</h1>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: inspire, sustain, notebook, outreach, pid..."
        style={{
          marginTop: 12,
          padding: 10,
          width: "100%",
          maxWidth: 520,
        }}
      />

      {q.trim() === "" ? (
        <p style={{ marginTop: 16 }}>
          Введи слово — и я покажу, где это находится (Terms / Awards / Roles / Best Practices).
        </p>
      ) : results.length === 0 ? (
        <p style={{ marginTop: 16 }}>Ничего не найдено. Попробуй другое слово.</p>
      ) : (
        <ul style={{ marginTop: 16 }}>
          {results.map((r) => (
            <li key={`${r.section}-${r.title}`} style={{ marginBottom: 14 }}>
              <div>
                <strong>{r.title}</strong> <span>({sectionLabel(r.section)})</span>
              </div>
              <div style={{ marginTop: 4 }}>{r.description}</div>
              <div style={{ marginTop: 6 }}>
                <Link href={r.href}>Open</Link>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 28 }}>
        <Link href="/wiki/ftc">← Back to FTC</Link>
      </div>
    </main>
  );
}