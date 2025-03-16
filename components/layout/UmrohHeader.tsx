"use client";

import { PiSlidersHorizontalLight } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";

export default function UmrohHeader() {
  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => setShowModal(true);
  const closeModal = (): void => setShowModal(false);
  return (
    <>
      <div className="py-4 px-6 flex justify-between items-center">
        <GoArrowLeft />

        <h1 className="text-base font-semibold">List Umroh</h1>

        <Button className="flex items-center gap-2" onClick={openModal}>
          <PiSlidersHorizontalLight />

          <span className="text-xs">Filter</span>
        </Button>
      </div>

      <Modal isOpen={showModal} onClose={closeModal} title="Example Modal">
        <p>
          This is a responsive modal that appears at the bottom on mobile
          screens and in the center on larger screens.
        </p>
        <p className="mt-2">You can add any content here.</p>
      </Modal>
    </>
  );
}
