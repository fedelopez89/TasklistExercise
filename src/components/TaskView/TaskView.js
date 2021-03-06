import React, { useState } from "react";
import ViewDetailModal from "../ViewDetailModal/ViewDetailModal";
// Styles
import * as S from "./styles";

/* Modal.setAppElement('App'); */

const TaskView = ({tasks}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

  const openModal = (task) => {
    setSelectedTask({ id: task.id, task: task.task });
    setIsOpen(true);
  };

  const closeModal = () => {
    resetStates();
    setIsOpen(false);
  };

  const resetStates = () => {
    setSelectedTask({});
  };
  
  return (
    <>
      <S.TaskList>
        {tasks.map((task) => (
          <li key={task.id} id={task.id} onClick={() => openModal(task)}>
            <S.TaskView>
              <S.nameTask>Task #{task.id}</S.nameTask>
              <S.nameTask>{task.task}</S.nameTask>
            </S.TaskView>
          </li>
        ))}
      </S.TaskList>
      <ViewDetailModal
        isOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        onRequestClose={closeModal}
        selectedTask={selectedTask}
      ></ViewDetailModal>
    </>
  );
};

export default TaskView;