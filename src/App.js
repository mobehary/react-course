import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
    const expense = [
      {
          id: 1,
          name: "Rachel Green",
          price: 250000,
          date: new Date(2018 , 10 , 18),
      },
      {
          id: 2,
          name: "Monica Geller",
          price: 474000,
          date: new Date(2019 , 7 , 9),
      },
      {
          id: 3,
          name: "Phoebe Buffay",
          price: 356000,
          date: new Date(2011 , 12 , 23),
      },
      {
          id: 4,
          name: "Joey Trippiani",
          price: 147000,
          date: new Date(2013 , 4 , 30),
      },
      {
          id: 5,
          name: "Chandler Bing",
          price: 340000,
          date: new Date(2017 , 5 , 13),
      },
      {
          id: 6,
          name: "Ross Geller",
          price: 870000,
          date: new Date(2015 , 2 , 24),
      }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome To My Life
        </a>
        <ExpenseItem name={expense[0].name} price={expense[0].price} date={expense[0].date}></ExpenseItem>
        <ExpenseItem name={expense[1].name} price={expense[1].price} date={expense[1].date}></ExpenseItem>
        <ExpenseItem name={expense[2].name} price={expense[2].price} date={expense[2].date}></ExpenseItem>
        <ExpenseItem name={expense[3].name} price={expense[3].price} date={expense[3].date}></ExpenseItem>
        <ExpenseItem name={expense[4].name} price={expense[4].price} date={expense[4].date}></ExpenseItem>
        <ExpenseItem name={expense[5].name} price={expense[5].price} date={expense[5].date}></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
