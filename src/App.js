import "./App.css";
import ExpenseTitle from "./components/ExpenseTitle";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseItems from "./components/ExpenseItems";
function App() {
  return (
    <div>
      <ExpenseTitle />
      <ExpenseForm />
      <ExpenseItems />
    </div>
  );
}

export default App;
