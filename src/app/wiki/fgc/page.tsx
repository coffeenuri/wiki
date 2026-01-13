import Link from "next/link";

export default function FGC() {
  return (
    <main style={{ padding: 40 }}>
      <h1>FGC</h1>

      <ul>
        <li><Link href="/wiki/fgc/terms">Термины</Link></li>
        <li><Link href="/wiki/fgc/awards">Награды</Link></li>
        <li><Link href="/wiki/fgc/roles">Роли</Link></li>
        <li><Link href="/wiki/fgc/best-practices">Best Practices</Link></li>
        <li><Link href="/wiki/fgc/search">Search</Link></li>
      </ul>
    </main>
  );
}
