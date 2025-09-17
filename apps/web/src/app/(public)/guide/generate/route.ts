import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { issue } = await req.json().catch(() => ({}));
  const steps = [
    { id: "s1", text: "Подготовьте место работы и освещение." },
    { id: "s2", text: issue?.category === "electric" ? "ОБЕСТОЧЬТЕ линию (выключите автомат)." : "Перекройте воду.", caution: true },
    { id: "s3", text: "Сделайте фото узла для сравнения «до/после»." },
    { id: "s4", text: `Следуйте инструкциям по узлу: ${issue?.title || "Осмотр"}` },
    { id: "s5", text: "Проверьте результат и соберите рабочее место." },
  ];
  return NextResponse.json({ steps, caution: steps.filter(s => (s as any).caution).map(() => "Соблюдайте технику безопасности") });
}
