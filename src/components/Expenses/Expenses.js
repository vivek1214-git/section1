import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandeler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onChangeFilter={filterChangeHandeler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
      </li>
    </div>
  );
};
export default Expenses;
