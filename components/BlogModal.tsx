"use client";
import { useState } from "react";
import Modal from "react-modal";
import Button from "./Button";
import { MDXRemote } from "next-mdx-remote/rsc";
Modal.setAppElement("#modal");

const BlogModal = ({ children }: { children: React.ReactNode }) => {
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
        overlayClassName="bg-[rgba(0,0,0,.4)] flex justify-center items-center absolute top-0 left-0 h-screen w-screen overflow-y-auto"
        className="w-3/4 p-8 overflow-y-auto bg-white rounded-xl"
      >
        {children}
      </Modal>
    </div>
  );
};

export default BlogModal;
