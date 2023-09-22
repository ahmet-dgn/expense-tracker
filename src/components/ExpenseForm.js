import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form className="card m-bottom">
      <label for="title">Title</label>
      <input
        className="w-100 m-bottom"
        type="text"
        id="title"
        name="title"
        placeholder="What did you buy?"
      />
      <div className="w-50 w-100-sm p-right-s p-right-sm-zero m-bottom">
        <label for="title">Date</label>
        <input
          className="w-100 "
          type="date"
          id="title"
          name="title"
          placeholder="What did you buy?"
        />
      </div>
      <div className="w-50 w-100-sm p-left-s p-left-sm-zero m-bottom">
        <label for="title">Amount</label>
        <input
          className="w-100 "
          type="text"
          id="title"
          name="title"
          placeholder="How much is it?"
        />
      </div>
      <div className="w-100 d-flex justify-content-e">
        <button type="button" className="cancel-btn">
          Cancel
        </button>
        <button type="button" className="add-btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
