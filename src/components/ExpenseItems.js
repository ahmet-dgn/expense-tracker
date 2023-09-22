import "./ExpenseItems.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseItems() {
  return (
    <div class="card m-bottom">
      <div class="d-flex justify-content-sb w-100 align-items-c m-bottom">
        <p class="filter-text">Filter by year</p>
        <select name="years" id="years">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <ExpenseItem />
    </div>
  );
}

export default ExpenseItems;
