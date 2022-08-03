import './ExpenseItems.css';

function ExpenseItems(props) {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const ExpenseAmount = props.amount;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">${ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
