import './ExpenseItems.css';

function ExpenseItems(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const ExpenseAmount = props.amount;
  const month = props.date.toLocaleString("en-US", { month: "long" })
  const day = props.date.toLocaleString("en-US", { month: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">${ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
