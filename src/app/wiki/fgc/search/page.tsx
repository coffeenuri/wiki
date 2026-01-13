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
  {
    title: "Impact",
    section: "terms",
    description: "Реальное влияние на сообщество и измеримые результаты.",
    href: "/wiki/fgc/terms",
    keywords: ["impact", "влияние", "метрики"],
  },
  {
    title: "Evidence",
    section: "terms",
    description: "Доказательства: цифры, ссылки, фото/видео, артефакты.",
    href: "/wiki/fgc/terms",
    keywords: ["evidence", "proof", "доказательства"],
  },
  {
    title: "Documentation Lead",
    section: "roles",
    description: "Структурирует документы и собирает доказательства.",
    href: "/wiki/fgc/roles",
    keywords: ["docs", "documentation", "портфолио"],
  },
  {
    title: "Work with facts",
    section: "best-practices",
    description: "Всегда добавляйте доказательства и метрики.",
    href: "/wiki/fgc/best-practices",
    keywords: ["facts", "metrics", "evidence"],
  },
];

function label(section: Item["section"]) {
  if (section === "terms") return "Terms";
  if (section === "awards") return "Awards";
  if (section === "roles") return "Roles";
  return "Best Practices";
}

export default function FGCSearch() {
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
      <h1>FGC — Search</h1>

      <input
        placeholder="Search FGC..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginTop: 12, padding: 10, width: "100%", maxWidth: 520 }}
      />

      {query === "" ? (
        <p style={{ marginTop: 16 }}>
          Введите слово (например: impact, evidence, documentation).
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
        <Link href="/wiki/fgc">← Back to FGC</Link>
      </div>
    </main>
  );
}