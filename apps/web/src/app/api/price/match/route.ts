import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { issueCode } = await req.json().catch(() => ({}));
  const items = [
    { sku: "CRTG-35MM", title: "Картридж смесителя 35мм", price: 65, shop: "Santech TJ" },
    { sku: "PTFE-19MM", title: "ФУМ-лента 19мм", price: 8,  shop: "Santech TJ" },
    { sku: "SOCK-16A",  title: "Розетка 16A",               price: 24, shop: "Electro+ Dushanbe" },
  ];
  const suggested = issueCode?.startsWith("PLUMB") ? ["CRTG-35MM","PTFE-19MM"]
                  : issueCode?.startsWith("ELECT") ? ["SOCK-16A"]
                  : [];
  return NextResponse.json({ items, suggested });
}
