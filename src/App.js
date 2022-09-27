import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


const expense = [
  {
    id:"e1",
    title: "car insurance",
    amount: 300,
    date: new Date(2019, 2, 22),
  },
  {
    id:"e2",
    title: "books",
    amount: 3300,
    date: new Date(2019, 4, 22),
  },
  {
    id:"e3",
    title: "living expenses",
    amount: 2300,
    date: new Date(2021, 2, 22),
  },
  {
    id:"e4",
    title: "petrol",
    amount: 400,
    date: new Date(2022, 2, 22),
  },
];
function App() {
  const [addData,setData]=useState(expense);
  
  

  const allExpensesHandler = (x) =>{

    setData(preValue => {return [x,...preValue]} )
                
  }

  return (
    <div>
      <NewExpense  allExpenses = {allExpensesHandler}/>
      <Expenses
       items={addData}
      ></Expenses>
      
      
    </div>
  );
}

export default App;
