import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props)=> {
    const[buttonChange,setButton] = useState(false);

    const handleClick = (Event) => {
          setButton(true);
    }
    const stopEditing = () =>{
        setButton(false);
    }

    const savedDataHandler= (enteredExpense) => {
           const addedExpense = {
            ...enteredExpense,
            id : Math.random().toString()
           }
           props.allExpenses(addedExpense);
    }
        

    return(
        <div className="new-expense">
           {!buttonChange && <button onClick={handleClick}> Add new Expense </button>}
           { buttonChange && <ExpenseForm onStopEditing={stopEditing} onSavedData = {savedDataHandler}/> }

        </div>
    )

}

export default NewExpense;