import React from "react";
import Modal from "react-modal";
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
    // Call to the API
    console.log(selectedTask.id);
  };

  return (
    <Modal
      isOpen={isOpen}
      className="modal-container"
      onRequestClose={closeModal}
    >
      <p>
        Task #{selectedTask.id} - {selectedTask.title}
      </p>
      <div style={{ textAlign: "right" }}>
        <button
          style={{ fontSize: 10 }}
          onClick={() => onComplete(selectedTask.id)}
        >
          Complete
        </button>
        <button style={{ fontSize: 10, marginLeft: 3 }} onClick={closeModal}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ViewDetailModal;