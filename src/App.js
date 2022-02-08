import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "././components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Cofee",
    amount: 280,
    date: new Date(2022, 5, 22),
  },

  { id: "e2", title: "Each juice", amount: 20, date: new Date(2021, 4, 21) },

  { id: "e3", title: "Tea", amount: 200, date: new Date(2020, 3, 20) },
  {
    id: "e4",
    title: "Milk",
    amount: 220,
    date: new Date(2021, 7, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
