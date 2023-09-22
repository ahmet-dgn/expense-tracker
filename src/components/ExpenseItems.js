import "./ExpenseItems.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems(props) {
  if (props.items.length === 0) {
    return <h2 className="expense-item-nofound">Found no expenses.</h2>;
  }

  return (
    <div className="w-100">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseItems;
