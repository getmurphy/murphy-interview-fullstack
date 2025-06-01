import express from "express";
import cors from "cors";
import { debtorRouter } from "./routes/debtors";

export const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/debtors", debtorRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
