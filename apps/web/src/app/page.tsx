export default function Home() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-white shadow p-6">
        <h2 className="text-xl font-semibold">Добро пожаловать в FixAR</h2>
        <p className="text-slate-600 mt-2">
          Это MVP: камера → mock‑диагностика → mock‑гайд → заказ → гарантия.
        </p>
        <a className="inline-block mt-4 px-4 py-2 rounded bg-blue-600 text-white" href="/scan">
          Начать сканирование
        </a>
      </div>
      <div className="rounded-2xl bg-white shadow p-6">
        <h3 className="font-semibold">Как это работает?</h3>
        <ol className="list-decimal ml-6 mt-2 space-y-1">
          <li>Откройте «Скан» и наведите камеру на проблему</li>
          <li>Получите предполагаемую проблему и шаги</li>
          <li>Создайте заказ и получите цифровую гарантию</li>
        </ol>
      </div>
    </div>
  );
}
