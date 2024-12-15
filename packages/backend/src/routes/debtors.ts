import { Router } from "express";
import { debtors } from "../data/json";

export const router = Router();

// GET /api/debtors
router.get("/", (req, res) => {
  res.json(debtors);
});

// GET /api/debtors/:id (to be completed during the interview)
router.get("/:id", (req, res) => {
  const debtor = debtors.find((d) => d.id === req.params.id);
  if (!debtor) {
    return res.status(404).json({ error: "Debtor not found" });
  }
  // Return more detailed info once implemented fully
  res.json({ ...debtor, contact: { email: "contact@example.com" } });
});
