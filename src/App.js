import { useState } from "react";
import Header from "./components/Header/Header";
import InputTaskNum from "./components/InputTaskNum/InputTaskNum";
import ListView from "./components/ListView/ListView";

function App() {

  const [numberTasks, setNumberTasks] = useState(0);

  const addNumberTasks = enteredNumber => {
    setNumberTasks(enteredNumber)
  };

  return (
    <>
      <Header title = {"Tasklist Exercise"}/>
      <InputTaskNum onAddNumberTasks={addNumberTasks}></InputTaskNum>
      <ListView numberTasks={numberTasks}></ListView>
    </>
  );
}

export default App;
