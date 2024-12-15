// packages/frontend/src/components/DebtorList.tsx
import { useEffect, useState } from "react";
import { Debtor } from "../interfaces/debtor";
import { fetchDebtors } from "../api/debtors";

interface DebtorListProps {
  onSelect: (id: string) => void;
}

export function DebtorList({ onSelect }: DebtorListProps) {
  const [debtors, setDebtors] = useState<Debtor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDebtors()
      .then((data) => {
        setDebtors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading debtors...</p>;
  if (error) return <p>Error: {error}</p>;

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
