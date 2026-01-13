import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "BILORDA • FIRST Encyclopedia",
  description: "FLL • FTC • FGC — Terms, Awards, Roles, Best Practices",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="headerInner">
            <Link href="/" className="brand">
              <div className="logo" />
              <div>
                <div style={{ fontWeight: 900, fontSize: 13 }}>BILORDA • FIRST Encyclopedia</div>
                <div className="small">FLL • FTC • FGC</div>
              </div>
            </Link>

            <div style={{ display: "flex", gap: 10 }}>
              <Link className="btn" href="/wiki">Wiki</Link>
              <Link className="btn btnPrimary" href="/wiki/search">Search</Link>
            </div>
          </div>
        </header>

        <div className="container">{children}</div>
      </body>
    </html>
  );
}