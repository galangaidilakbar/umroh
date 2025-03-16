"use client";

import { PiSlidersHorizontalLight } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
import FilterProductModalContent from "../product/FilterProductModalContent";

export default function UmrohHeader({
  onFilterChange,
}: {
  onFilterChange: (filter: { by: string | null; value: string }) => void;
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = (): void => setShowModal(true);
  const closeModal = (): void => setShowModal(false);
  return (
    <>
      <div className="flex items-center justify-between px-6 py-4 text-white">
        <GoArrowLeft />

        <h1 className="text-base font-semibold">List Umroh</h1>

        <Button className="flex items-center gap-2" onClick={openModal}>
          <PiSlidersHorizontalLight />

          <span className="text-xs">Filter</span>
        </Button>
      </div>

      <Modal isOpen={showModal} onClose={closeModal} title="Filter">
        <FilterProductModalContent
          onFilterChange={onFilterChange}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}
