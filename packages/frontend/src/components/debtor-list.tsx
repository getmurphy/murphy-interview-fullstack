// packages/frontend/src/components/DebtorList.tsx
import { useState } from "react";
import { Debtor } from "../interfaces/debtor";

interface DebtorListProps {
  onSelect: (id: string) => void;
}

export function DebtorList({ onSelect }: DebtorListProps) {
  const [debtors, setDebtors] = useState<Debtor[]>([]);

  return (
    <ul className="debtor-list">
      {debtors.map((debtor) => (
        <li key={debtor.id} className="list-debtor">
          {debtor.name} owes ${debtor.amountOwed}
          <button onClick={() => onSelect(debtor.id)}>Details</button>
        </li>
      ))}
    </ul>
  );
}
