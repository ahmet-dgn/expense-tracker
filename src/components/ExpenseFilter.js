function ExpenseFilter(props) {
  const ExpensesFilter = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="d-flex justify-content-sb w-100 align-items-c m-bottom">
      <p className="filter-text">Filter by year</p>
      <select value={props.selected} onChange={ExpensesFilter} id="years">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
