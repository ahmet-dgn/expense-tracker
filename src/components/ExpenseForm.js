import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredAmount, setEnteredAmount] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(" ");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    //Aşağıda ki preventDefault starndart html eventlerini iptal eder. Burda örnek form submit butonuna basılınca sayfayı yeniliyor. Bu metod ile engellemeiş oluyoruz.
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //form gönderildikten sonra inputu temizle.
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="card m-bottom" onSubmit={submitHandler}>
      <label>Title</label>
      <input
        className="w-100 m-bottom"
        type="text"
        value={enteredTitle}
        onChange={titleChangeHandler}
      />
      <div className="w-50 w-100-sm p-right-s p-right-sm-zero m-bottom">
        <label>Date</label>
        <input
          className="w-100 "
          type="date"
          min="2019-01-01"
          max="2023-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="w-50 w-100-sm p-left-s p-left-sm-zero m-bottom">
        <label>Amount</label>
        <input
          className="w-100"
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="w-100 d-flex justify-content-e">
        <button type="submit" className="add-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
