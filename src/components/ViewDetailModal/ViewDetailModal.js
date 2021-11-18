import React from "react";
import Modal from "react-modal";
import { postCompleteTask } from "../../helpers/postCompleteTask";

// Styles
import "./styles.css";

const ViewDetailModal = ({
  isOpen = false,
  setIsOpen = true,
  selectedTask = { },
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const onComplete = (idTask) => {
    postCompleteTask(idTask);
    console.log(selectedTask.id);
  };

  return (
    <Modal
      ariaHideApp={false}
      className="modal-container"
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <p>
        Task #{selectedTask.id} - {selectedTask.task}
      </p>
      <div style={{ textAlign: "right"}}>
        <button
          style={{ fontSize: 10 }}
          onClick={() => onComplete(selectedTask.id)}
        >
          Complete
        </button>
        <button style={{ fontSize: 10, marginLeft: 3}} onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ViewDetailModal;