export default function WarrantyPage({ params }: { params: { id: string } }) {
  return (
    <div className="rounded-2xl bg-white shadow p-6">
      <h2 className="text-lg font-semibold">Гарантия</h2>
      <p className="text-slate-600 mt-2">Паспорт ремонта для заказа: <b>{params.id}</b> (placeholder)</p>
    </div>
  );
}
