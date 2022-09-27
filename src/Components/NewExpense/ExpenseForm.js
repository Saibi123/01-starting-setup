import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [changedTitle, storedTitle] = useState("");
  const [changedAmount, storedAmount] = useState("");
  const [changedDate, storedDate] = useState("");
  const setEnteredTitle = (Event) => {
    storedTitle(Event.target.value);
  };
  const setEnteredAmount = (Event) => {
    storedAmount(Event.target.value);
  };
  const setEnteredDate = (Event) => {
    storedDate(Event.target.value);
  };

  const submitHandler = (Event)=> {

    Event.preventDefault();
    const storedData = {
        title : changedTitle,
        amount : +changedAmount,
        date : new Date(changedDate) 
    }

    props.onSavedData(storedData);
    storedTitle('');
    storedAmount('');
    storedDate('');

}



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={changedTitle} onChange={setEnteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changedAmount}
            onChange={setEnteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-12"
            max="2022-05-22"
            value ={changedDate}
            onChange={setEnteredDate}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="sumbit" onClick={props.onStopEditing}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
