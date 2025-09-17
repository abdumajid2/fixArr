import { Router } from "express";
const router = Router();
const ORDERS: any[] = [];
router.post("/", (req, res) => {
  const id = `ord_${Math.random().toString(36).slice(2,8)}`;
  const payload = { id, status: "NEW", ...req.body, createdAt: new Date().toISOString() };
  ORDERS.push(payload);
  res.json(payload);
});
router.get("/", (_req, res) => res.json(ORDERS));
router.post("/:id/close", (req, res) => {
  const o = ORDERS.find(x => x.id === req.params.id);
  if (!o) return res.status(404).json({ error: "Order not found" });
  o.status = "DONE";
  o.amount = req.body?.amount ?? 120;
  o.warranty = {
    id: `w_${o.id}`,
    checksum: Buffer.from(`${o.id}:${o.amount}`).toString("base64"),
    expiresAt: new Date(Date.now()+1000*60*60*24*180).toISOString(),
    qrUrl: `/w/${o.id}`
  };
  res.json(o);
});
export default router;
