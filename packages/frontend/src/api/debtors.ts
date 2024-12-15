import { Debtor } from "../interfaces/debtor";

// packages/frontend/src/api.ts
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export async function fetchDebtors(): Promise<Debtor[]> {
  const response = await fetch(`${API_BASE_URL}/api/debtors`);
  if (!response.ok) throw new Error("Failed to fetch debtors");
  return response.json();
}

export async function fetchDebtorById(id: string): Promise<Debtor> {
  const response = await fetch(`${API_BASE_URL}/api/debtors/${id}`);
  if (!response.ok) throw new Error("Failed to fetch debtor details");
  return response.json();
}
