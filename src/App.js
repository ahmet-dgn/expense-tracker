import "./App.css";
import ExpenseTitle from "./components/ExpenseTitle";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItems from "./components/ExpenseItems";

const ExpenseData = [
  {
    id: "e1",
    title: "Bread",
    amount: 50.5,
    date: new Date(2023, 8, 14),
  },
  {
    id: "e2",
    title: "Bread",
    amount: 50.5,
    date: new Date(2023, 7, 8),
  },
  {
    id: "e3",
    title: "Steak",
    amount: 8.0,
    date: new Date(2020, 9, 25),
  },
];
function App() {
  return (
    <div>
      <ExpenseTitle />
      <ExpenseForm />
      <ExpenseItems items={ExpenseData} />
    </div>
  );
}

export default App;
