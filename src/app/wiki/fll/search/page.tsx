"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  title: string;
  section: "terms" | "awards" | "roles" | "best-practices";
  description: string;
  href: string;
  keywords: string[];
};

const DATA: Item[] = [
  // TERMS
  {
    title: "Core Values",
    section: "terms",
    description: "Базовые ценности FLL: уважение, командность, честность.",
    href: "/wiki/fll/terms",
    keywords: ["values", "core", "уважение", "команда"],
  },
  {
    title: "Robot Game",
    section: "terms",
    description: "Часть соревнования, где робот выполняет миссии на поле.",
    href: "/wiki/fll/terms",
    keywords: ["robot", "game", "миссии", "поле"],
  },
  {
    title: "Innovation Project",
    section: "terms",
    description: "Исследовательский проект команды по теме сезона.",
    href: "/wiki/fll/terms",
    keywords: ["project", "innovation", "research", "solution"],
  },

  // AWARDS
  {
    title: "Champion’s Award",
    section: "awards",
    description: "Главная награда FLL за баланс во всех направлениях.",
    href: "/wiki/fll/awards",
    keywords: ["champion", "главная"],
  },
  {
    title: "Robot Design Award",
    section: "awards",
    description: "За продуманный дизайн и инженерные решения робота.",
    href: "/wiki/fll/awards",
    keywords: ["design", "robot", "инженерия"],
  },
  {
    title: "Core Values Award",
    section: "awards",
    description: "За сильное проявление ценностей FLL.",
    href: "/wiki/fll/awards",
    keywords: ["core", "values", "award"],
  },

  // ROLES
  {
    title: "Programmer",
    section: "roles",
    description: "Пишет код и отвечает за стабильность миссий.",
    href: "/wiki/fll/roles",
    keywords: ["programmer", "код"],
  },
  {
    title: "Team Captain",
    section: "roles",
    description: "Организует команду и помогает всем работать вместе.",
    href: "/wiki/fll/roles",
    keywords: ["captain", "лидер"],
  },

  // BEST PRACTICES
  {
    title: "Robot Game Stability",
    section: "best-practices",
    description: "Стабильность и повторяемость важнее сложности.",
    href: "/wiki/fll/best-practices",
    keywords: ["stability", "repeat", "test"],
  },
];

function label(section: Item["section"]) {
  if (section === "terms") return "Terms";
  if (section === "awards") return "Awards";
  if (section === "roles") return "Roles";
  return "Best Practices";
}

export default function FLLSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return DATA.filter((item) =>
      `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main style={{ padding: 40 }}>
      <h1>FLL — Search</h1>

      <input
        placeholder="Search FLL..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginTop: 12, padding: 10, width: "100%", maxWidth: 520 }}
      />

      {query === "" ? (
        <p style={{ marginTop: 16 }}>
          Введите термин, награду или роль (например: robot, core values, project).
        </p>
      ) : results.length === 0 ? (
        <p style={{ marginTop: 16 }}>Ничего не найдено.</p>
      ) : (
        <ul style={{ marginTop: 16 }}>
          {results.map((r) => (
            <li key={r.title} style={{ marginBottom: 14 }}>
              <strong>{r.title}</strong> ({label(r.section)})
              <div>{r.description}</div>
              <Link href={r.href}>Open</Link>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 24 }}>
        <Link href="/wiki/fll">← Back to FLL</Link>
      </div>
    </main>
  );
}