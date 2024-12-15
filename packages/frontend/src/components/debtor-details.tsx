// packages/frontend/src/components/DebtorDetails.tsx
import { useEffect, useState } from "react";
import { Debtor } from "../interfaces/debtor";
import { fetchDebtorById } from "../api/debtors";

interface DebtorDetailsProps {
  selectedDebtorId: string | null;
}

export function DebtorDetails({ selectedDebtorId }: DebtorDetailsProps) {
  const [debtor, setDebtor] = useState<Debtor | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDebtorId) return;
    setLoading(true);
    setError(null);
    setDebtor(null);

    fetchDebtorById(selectedDebtorId)
      .then((data) => {
        setDebtor(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedDebtorId]);

  if (!selectedDebtorId) return <p>Select a debtor to see details.</p>;
  if (loading) return <p>Loading details for debtor {selectedDebtorId}...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!debtor) return <p>No details found.</p>;

  return (
    <div>
      <h3>{debtor.name}</h3>
      <p>Amount Owed: ${debtor.amountOwed}</p>
      {debtor.contact && <p>Contact Email: {debtor.contact.email}</p>}
      {/* Additional details can be displayed once implemented */}
    </div>
  );
}
