import React, { useState, useEffect } from "react";
import { getTasks } from "../../helpers/getTasks";
import TaskView from "../TaskView/TaskView";
// Styles
import * as S from "./styles";

const defaultData = [
  { id: "001", title: "Mariano Andujar" },
  { id: "002", title: "Leandro Chavo Desabato" },
  { id: "003", title: "Cristian Cellay" },
  { id: "004", title: "El Flaco Schavi" },
  { id: "005", title: "Rodrigo Braña" },
  { id: "008", title: "Enzo Nicolas Perez" },
  { id: "009", title: "Mauro Boselli" },
  { id: "010", title: "Gaston Nicolas LaGata Fernandez" },
  { id: "011", title: "Juan Sebastian Veron" },
  { id: "023", title: "ElChino Benitez" },
  { id: "101", title: "Mariano Andujar" },
  { id: "102", title: "Leandro Chavo Desabato" },
  { id: "103", title: "Cristian Cellay" },
  { id: "104", title: "El Flaco Schavi" },
  { id: "105", title: "Rodrigo Braña" },
  { id: "108", title: "Enzo Nicolas Perez" },
  { id: "109", title: "Mauro Boselli" },
  { id: "110", title: "Gaston Nicolas LaGata Fernandez" },
];

const ListView = () => {
  const [listTask, setListTask] = useState(defaultData);
  const [listTask2, setListTask2] = useState({});

  useEffect(() => {
    getTasks(3).then((tasks) => {
      setListTask2(tasks);
    });
  }, []);

  let content = <p>No tasks found.</p>;

  if (listTask.length > 0) {
    content = <TaskView tasks={listTask} />;
  }

  return <S.ListViewStyle>{content}</S.ListViewStyle>;
};

export default ListView;
