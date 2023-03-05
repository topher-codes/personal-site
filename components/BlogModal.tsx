"use client";
import { useState } from "react";
import Modal from "react-modal";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

Modal.setAppElement("#modal");

const BlogModal = ({ content }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const source = serialize(content);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="w-1/2 p-6 m-auto bg-white h-1/2"
        overlayClassName="w-full h-full p-6 m-auto bg-black bg-opacity-50"
      >
        <MDXRemote {...source} />
      </Modal>
    </div>
  );
};

export default BlogModal;
