import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate"

function ExpenseItems(props) {
  const expenseTitle = props.title;
  const ExpenseAmount = props.amount;
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">${ExpenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
