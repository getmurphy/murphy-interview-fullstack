import express from "express";
import { router as debtorsRouter } from "./routes/debtors";
import cors from "cors";

export const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/debtors", debtorsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
