import './ExpenseItems.css';

function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>8월 3일 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item_price">10000원</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
