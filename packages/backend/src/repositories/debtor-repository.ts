import { Debtor } from "../models/debtor";

export interface IDebtorRepository {
  getAll(): Promise<Debtor[]>;
  getById(id: string): Promise<Debtor | undefined>;
}
