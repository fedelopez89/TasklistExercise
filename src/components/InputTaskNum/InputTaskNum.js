import React, { useState } from "react";
import styles from "./InputTaskNum.module.css";

const InputTaskNum = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const numTaskInputChangeHandler = (event) => {
    if (event.target.value > -1) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddNumberTasks(enteredValue);
    setEnteredValue("");
  };

  return (
    <div className={styles["goal-form"]}>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label>Introduce number of tasks</label>
          <input
            type="number"
            min="0"
            value={enteredValue}
            onChange={numTaskInputChangeHandler}
          />
        </div>
        <button type="submit" className={styles["button"]}>Submit</button>
      </form>
    </div>
  );
};

export default InputTaskNum;
