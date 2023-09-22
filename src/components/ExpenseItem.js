import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item  w-100 d-flex justify-content-sb align-items-c">
      <div className="expense-item-left-area d-flex align-items-c">
        <div className="expense-item_date">
          <span className="expense-item_date_day">{day}</span>
          <span className="expense-item_date_month">{month}</span>
          <span className="expense-item_date_year">{year}</span>
        </div>
        <p className="expense-item_title">{props.title}</p>
      </div>
      <p className="expense-item_price">${props.amount}</p>
    </div>
  );
}

export default ExpenseItem;
