import "./ExpenseItems.css";

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
      <div class="expense-item  w-100 d-flex justify-content-sb align-items-c">
        <div class="expense-item-left-area d-flex align-items-c">
          <div class="expense-item_date">
            <span class="expense-item_date_day">8</span>
            <span class="expense-item_date_month">July</span>
            <span class="expense-item_date_year">2020</span>
          </div>
          <p class="expense-item_title">Toliet Paper</p>
        </div>
        <p class="expense-item_price">$20.10</p>
      </div>
      <div class="expense-item w-100 d-flex justify-content-sb align-items-c">
        <div class="expense-item-left-area d-flex align-items-c">
          <div class="expense-item_date">
            <span class="expense-item_date_day">25</span>
            <span class="expense-item_date_month">September</span>
            <span class="expense-item_date_year">2020</span>
          </div>
          <p class="expense-item_title">Steak</p>
        </div>
        <p class="expense-item_price">$8.00</p>
      </div>
    </div>
  );
}

export default ExpenseItems;
