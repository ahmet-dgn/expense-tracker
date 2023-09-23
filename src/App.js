import "./App.css";
import React, { useState } from "react";
import ExpenseTitle from "./components/ExpenseTitle";
import NewExpense from "./components/NewExpense";
import Expense from "./components/Expense";
import PixelPerfectChecker from "./pixel-perfect-checker/PixelPerfectChecker";

const ExpenseData = [
  {
    id: "e1",
    title: "Bread",
    amount: 50.05,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 20.05,
    date: new Date(2020, 6, 8),
  },
  {
    id: "e3",
    title: "Steak",
    amount: 8.15,
    date: new Date(2020, 8, 25),
  },
  {
    id: "e3",
    title: "Rice",
    amount: 1.05,
    date: new Date(2023, 8, 25),
  },
  {
    id: "e3",
    title: "Fish",
    amount: 2.15,
    date: new Date(2022, 8, 25),
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
      <PixelPerfectChecker />
      <ExpenseTitle />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
