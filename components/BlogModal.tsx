"use client";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";

Modal.setAppElement("#modal");

const BlogModal = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Button onClick={openModal} size="small">
          Read More
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen"
        className="w-3/4 p-8 bg-white rounded-xl"
      >
        <h2>Modal Title</h2>
        <div>{children}</div>
      </Modal>
    </div>
  );
};

export default BlogModal;
