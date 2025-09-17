import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { image } = await req.json().catch(() => ({}));
  const guess =
    image?.includes("faucet")
      ? { code: "PLUMB_LEAK_CART", title: "Течь: картридж смесителя", category: "plumbing" }
      : image?.includes("socket")
      ? { code: "ELECT_OUTLET_FAULT", title: "Неисправность розетки", category: "electric" }
      : { code: "GENERIC_INSPECT", title: "Требуется визуальный осмотр", category: "general" };
  const confidence = guess.code === "GENERIC_INSPECT" ? 0.55 : 0.82;
  return NextResponse.json({ issue: guess, confidence, boxes: [] });
}
