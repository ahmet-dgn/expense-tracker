import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //App.js den gelen prop a burdaki expenseData fonksiyonunu parametre olarak ekliyoruz ve lifting up yapmış oluyoruz.
  };
  return <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />;
}
export default NewExpense;
