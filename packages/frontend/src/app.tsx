import { useState } from "react";
import { DebtorList } from "./components/debtor-list";
import { DebtorDetails } from "./components/debtor-details";

function App() {
  const [selectedDebtorId, setSelectedDebtorId] = useState<string | null>(null);

  return (
    <div className="main">
      <header className="header">
        <h1>Murphy - Debt Collection Tool</h1>
      </header>
      <div className="content">
        <section className="container-section">
          <h2>Debtor List</h2>
          <DebtorList onSelect={(id) => setSelectedDebtorId(id)} />
        </section>
        <hr className="separator" />
        <section className="container-section">
          <DebtorDetails selectedDebtorId={selectedDebtorId} />
        </section>
      </div>
    </div>
  );
}

export default App;
