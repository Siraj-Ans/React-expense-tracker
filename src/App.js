import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insuranse",
      amount: 294.12,
      date: new Date(2021, 2, 18),
    },
    {
      id: "e4",
      title: "New Desk(wooden)",
      amount: 450,
      date: new Date(2021, 5, 14),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    expenses.push(expenseData);

    console.log("Printing expense data from app component!");
    console.log(expenseData);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
