import { Router } from "express";
import { debtors } from "../data/json";

export const router = Router();

// GET /api/debtors
router.get("/", (req, res) => {
  res.json(debtors);
});

// GET /api/debtors/:id (to be completed during the interview)
router.get("/:id", (req, res) => {
  //TODO: implement this route
});
