export interface Debtor {
  id: string;
  name: string;
  amountOwed: number;
  contact?: {
    email: string;
  };
}
