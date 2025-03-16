import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-neutral-950/50 transition-opacity lg:items-center">
      {/* Modal Container - Bottom on mobile, centered on large screens */}
      <div className="w-full max-w-lg transform rounded-t-xl bg-white shadow-xl transition-all lg:w-1/2 lg:rounded-lg dark:bg-neutral-800">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <Button
            onClick={onClose}
            className="text-lg text-neutral-900 transition-colors hover:text-neutral-500 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            <IoCloseSharp />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-4 text-neutral-700 dark:text-neutral-200">
          {children}
        </div>

        {/* Modal Footer */}
        {/* Modal Footer */}
        <div className="flex flex-col gap-2 rounded-b-lg bg-neutral-50 px-4 py-3 sm:flex-row-reverse sm:px-6 dark:bg-neutral-700/30">
          <Button
            onClick={onClose}
            className="inline-flex w-full justify-center rounded-md border-transparent bg-neutral-700 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-neutral-900 focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:outline-none sm:w-auto dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
          >
            Cari
          </Button>
        </div>
      </div>
    </div>
  );
}
