import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="card m-bottom">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItems items={filteredExpenses} />
    </div>
  );
}

export default Expense;
