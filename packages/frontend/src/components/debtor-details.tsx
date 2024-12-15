// packages/frontend/src/components/DebtorDetails.tsx
import { useState } from "react";
import { Debtor } from "../interfaces/debtor";

interface DebtorDetailsProps {
  selectedDebtorId: string | null;
}

export function DebtorDetails({ selectedDebtorId }: DebtorDetailsProps) {
  const [debtor, setDebtor] = useState<Debtor | null>(null);

  if (!selectedDebtorId) return <p>Select a debtor to see details.</p>;

  if (!debtor) return <p>No details found.</p>;

  return (
    <div>
      <h3>{debtor.name}</h3>
      <p>Amount Owed: ${debtor.amountOwed}</p>
      {debtor.email && <p>Contact Email: {debtor.email}</p>}
      {debtor.phone && <p>Contact Phone: {debtor.phone}</p>}
    </div>
  );
}
