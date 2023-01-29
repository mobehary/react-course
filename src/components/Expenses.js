import 'Expenses.css';
import ExpensesDate from './ExpenseDate.js';

function Expenses(props){
    return (
        <div>
            <ExpenseItem name={expense[0].name} price={expense[0].price} date={expense[0].date} />
            <ExpenseItem name={expense[1].name} price={expense[1].price} date={expense[1].date} />
            <ExpenseItem name={expense[2].name} price={expense[2].price} date={expense[2].date} />
            <ExpenseDate name={expense[0].name} price={expense[0].price} date={expense[0].date} />
            <ExpenseDate name={expense[1].name} price={expense[1].price} date={expense[1].date} />
            <ExpenseDate name={expense[2].name} price={expense[2].price} date={expense[2].date} />
        </div>
      );
}

export default Expenses;