import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "huehue", amount: 69, category: "Beauty" },
    { id: 3, description: "nigga", amount: 12, category: "Nice" },
    { id: 5, description: "epic", amount: 64, category: "Toys" },
    { id: 7, description: "chungus", amount: 75, category: "Food" },
    { id: 8, description: "bruh", amount: 10, category: "Meme" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
