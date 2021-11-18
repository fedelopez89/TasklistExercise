import React, { useState, useEffect } from "react";
import { getTasks } from "../../helpers/getTasks";
import TaskView from "../TaskView/TaskView";
// Styles
import * as S from "./styles";

const ListView = (props) => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    getTasks(props.numberTasks).then((tasks) => {
      setListTask(tasks);
    });
  }, [props.numberTasks]);

  let content = <p>No tasks found.</p>;

  if (listTask !== undefined) {
    if (listTask.length > 0) {
      content = <TaskView tasks={listTask} />;
    }
  }

  return <S.ListViewStyle>{content}</S.ListViewStyle>;
};

export default ListView;
