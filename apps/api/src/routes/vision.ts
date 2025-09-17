import { Router } from "express";
const router = Router();
router.post("/classify", async (req, res) => {
  const { image } = req.body || {};
  const guess = image?.includes("faucet")
    ? { code: "PLUMB_LEAK_CART", title: "Течь: картридж смесителя", category: "plumbing" }
    : image?.includes("socket")
    ? { code: "ELECT_OUTLET_FAULT", title: "Неисправность розетки", category: "electric" }
    : { code: "GENERIC_INSPECT", title: "Требуется визуальный осмотр", category: "general" };
  const confidence = guess.code === "GENERIC_INSPECT" ? 0.55 : 0.82;
  res.json({ issue: guess, confidence, boxes: [] });
});
export default router;
