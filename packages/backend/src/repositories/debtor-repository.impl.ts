import { Debtor } from "../models/debtor";
import { IDebtorRepository } from "./debtor-repository";
import fs from "fs/promises";

export class JsonDebtorRepositoryImpl implements IDebtorRepository {
  constructor(private readonly filePath: string) {}

  async getAll(): Promise<Debtor[]> {
    const data = await fs.readFile(this.filePath, "utf-8");
    return JSON.parse(data);
  }

  async getById(id: string): Promise<Debtor | undefined> {
    const debtors = await this.getAll();
    return debtors.find((debtor) => debtor.id === id);
  }
}
