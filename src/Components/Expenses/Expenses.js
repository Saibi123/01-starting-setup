import React, { useState } from "react";
import ExpensiveItem from "./ExpensiveItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filter, setFiltervalue] = useState("2019");

  const filteredValue = (selected) => {
    setFiltervalue(selected);
    console.log(selected);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          initialValue={filter}
          onFiltered={filteredValue}
        ></ExpensesFilter>
        <ExpensesChart expenses ={filterExpenses}></ExpensesChart>
        {filterExpenses.length === 0 ? (
          <p>NO EXPENSE FOUND</p>
        ) : (
          filterExpenses.map((expense) => (
            <ExpensiveItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpensiveItem>
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
