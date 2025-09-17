"use client";
export default function GuidePage() {
  const data = typeof window !== "undefined" ? sessionStorage.getItem("fixar_last_guide") : null;
  const parsed = data ? JSON.parse(data) : null;
  return (
    <div className="rounded-2xl bg-white shadow p-6 space-y-3">
      <h2 className="text-lg font-semibold">Шаги</h2>
      {!parsed && <p className="text-slate-600">Нет данных</p>}
      {parsed && (
        <div>
          <div className="mb-2 font-medium">{parsed.issue.title}</div>
          <ol className="list-decimal ml-5 space-y-1">
            {parsed.steps.map((s:any) => (
              <li key={s.id} className={s.caution ? "text-red-700 font-medium" : ""}>{s.text}</li>
            ))}
          </ol>
          <a href="/" className="inline-block mt-4 px-4 py-2 rounded bg-slate-900 text-white">На главную</a>
        </div>
      )}
    </div>
  );
}
