import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "huehue", amount: 69, category: "Utilities" },
    { id: 3, description: "nigga", amount: 12, category: "Groceries" },
    { id: 5, description: "epic", amount: 64, category: "Utilities" },
    { id: 7, description: "chungus", amount: 75, category: "Entertainment" },
    { id: 8, description: "bruh", amount: 10, category: "Entertainment" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
