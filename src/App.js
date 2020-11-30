import { useState } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import TotalExpenses from "./components/TotalExpenses";
import TransactionHistory from "./components/TransactionHistory";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [showAddBox, setShowAddBox] = useState(false);
  const [plus, setPlus] = useState(true);

  return (
    <div className="App">
      <div className="App-Title"> EXPENSE TRACKER APP</div>
      <TotalExpenses
        transactions={transactions}
        setPlus={setPlus}
        setShowAddBox={setShowAddBox}
      />
      {showAddBox && (
        <AddTransaction
          plus={plus}
          setTransactions={setTransactions}
          setShowAddBox={setShowAddBox}
        />
      )}
      <TransactionHistory
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}
