import Link from "next/link";

export default function FTC() {
  return (
    <main style={{ padding: 40 }}>
      <h1>FTC</h1>

      <ul>
        <li><Link href="/wiki/ftc/terms">Термины</Link></li>
        <li><Link href="/wiki/ftc/awards">Награды</Link></li>
        <li><Link href="/wiki/ftc/roles">Роли</Link></li>
        <li><Link href="/wiki/ftc/best-practices">Best Practices</Link></li>
      </ul>
    </main>
  );
}