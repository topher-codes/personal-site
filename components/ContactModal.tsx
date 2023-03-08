"use client";
import Modal from "react-modal";
import { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { Twitter, Mail, GitHub } from "react-feather";

Modal.setAppElement("#modal");

const ContactModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={openModal}>Contact</Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Modal"
        className="flex flex-col items-center justify-center w-1/2 p-6 m-auto h-1/2 bg-slate-100 rounded-2xl"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
      >
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="py-2">
          <Button>
            <Link href="mailto:andrewsc33@icloud.com">
              <Mail />
            </Link>
          </Button>
        </p>
        <p className="py-2">
          <Button>
            <Link href="https://twitter.com/503dev?ref_src=twsrc%5Etfw">
              <Twitter />
            </Link>
          </Button>
        </p>
        <p className="py-2">
          <Button>
            <Link href="https://github.com/topher-codes">
              <GitHub />
            </Link>
          </Button>
        </p>
      </Modal>
    </>
  );
};

export default ContactModal;
