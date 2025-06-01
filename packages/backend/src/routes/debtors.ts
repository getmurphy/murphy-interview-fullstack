import { Router } from "express";

export const router = Router();

export function debtorRouter() {
  // GET /api/debtors
  router.get("/", (req, res) => {
    // TODO: implement this route
  });

  // GET /api/debtors/:id
  router.get("/:id", (req, res) => {
    //TODO: implement this route
  });

  return router;
}
