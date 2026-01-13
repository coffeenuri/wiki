import Link from "next/link";

function League({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link href={href} className="card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="cardTitle">{title}</div>
      <div className="muted" style={{ marginTop: 6 }}>{desc}</div>
      <div style={{ marginTop: 12 }}>
        <span className="btn btnPrimary">Open →</span>
      </div>
    </Link>
  );
}

export default function Wiki() {
  return (
    <main>
      <div className="card">
        <div className="row">
          <div>
            <h1 className="h1">FIRST Wiki</h1>
            <p className="p">
              Термины, награды, роли и best practices.
            </p>
          </div>
          <Link className="btn btnPrimary" href="/wiki/search">Global Search</Link>
        </div>
      </div>

      <div style={{ height: 14 }} />

      <div className="grid3">
        <League title="FLL" desc="Core Values • Robot Game • Innovation Project" href="/wiki/fll" />
        <League title="FTC" desc="Robot • Portfolio • Judging • Auto/TeleOp" href="/wiki/ftc" />
        <League title="FGC" desc="Impact • Documentation • Evidence • Community" href="/wiki/fgc" />
      </div>
    </main>
  );
}