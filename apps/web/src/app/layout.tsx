export const metadata = { title: "FixAR", description: "AR copilot for home repair" };
import "../styles/globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-5xl p-6">
          <header className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold">FixAR</h1>
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:underline">Главная</a>
              <a href="/scan" className="hover:underline">Скан</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
