import express from "express";
import cors from "cors";
import morgan from "morgan";
import visionRouter from "./routes/vision.js";
import guideRouter from "./routes/guide.js";
import priceRouter from "./routes/price.js";
import ordersRouter from "./routes/orders.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(morgan("dev"));

app.get("/", (_req, res) => res.json({ ok: true, name: "FixAR API", version: "0.1.0" }));
app.use("/vision", visionRouter);
app.use("/guide", guideRouter);
app.use("/price", priceRouter);
app.use("/orders", ordersRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
