import "./App.css";
import React, { useState } from "react";
import ExpenseTitle from "./components/ExpenseTitle";
import NewExpense from "./components/NewExpense";
import ExpenseItems from "./components/ExpenseItems";

const ExpenseData = [
  {
    id: "e1",
    title: "Bread",
    amount: 50.05,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 20.05,
    date: new Date(2023, 6, 8),
  },
  {
    id: "e3",
    title: "Steak",
    amount: 8.15,
    date: new Date(2020, 8, 25),
  },
];
function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <ExpenseTitle />
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems items={expenses} />
    </div>
  );
}

export default App;
