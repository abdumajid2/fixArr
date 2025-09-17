import { Router } from "express";
const router = Router();
router.post("/match", (req, res) => {
  const { issueCode } = req.body || {};
  const catalog = [
    { sku: "CRTG-35MM", title: "Картридж смесителя 35мм", price: 65, shop: "Santech TJ" },
    { sku: "PTFE-19MM", title: "ФУМ-лента 19мм", price: 8, shop: "Santech TJ" },
    { sku: "SOCK-16A", title: "Розетка 16A", price: 24, shop: "Electro+ Dushanbe" }
  ];
  const suggested = issueCode?.startsWith("PLUMB") ? ["CRTG-35MM","PTFE-19MM"]
                  : issueCode?.startsWith("ELECT") ? ["SOCK-16A"]
                  : [];
  res.json({ items: catalog, suggested });
});
export default router;
