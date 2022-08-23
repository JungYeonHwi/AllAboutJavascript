import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"

function ExpenseItems(props) {
  const expenseTitle = props.title;
  const ExpenseAmount = props.amount;
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">${ExpenseAmount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
