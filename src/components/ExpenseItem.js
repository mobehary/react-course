import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

const date = new Date(2018 , 10 , 18);
const name = "Mercedes";
const price = 250000;

function ExpenseItem(props) {

    return (
    <div className="expense-item">
        <ExpenseDate date={props.date} name={props.name} price={props.price}/>
        <div className="Actor_Name"><h2>{props.name}</h2></div>
        <div className="expense-item__price">{props.price}</div>
    </div>
    );
}

export default ExpenseItem;