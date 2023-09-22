import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div class="expense-item  w-100 d-flex justify-content-sb align-items-c">
      <div class="expense-item-left-area d-flex align-items-c">
        <div class="expense-item_date">
          <span class="expense-item_date_day">14</span>
          <span class="expense-item_date_month">August</span>
          <span class="expense-item_date_year">2023</span>
        </div>
        <p class="expense-item_title">Bread</p>
      </div>
      <p class="expense-item_price">$50.05</p>
    </div>
  );
}

export default ExpenseItem;
