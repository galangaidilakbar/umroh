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
    <div className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-neutral-950/50 transition-opacity">
      {/* Modal Container - Bottom on mobile, centered on large screens */}
      <div className="bg-white dark:bg-neutral-800 rounded-t-lg lg:rounded-lg w-full lg:w-1/2 max-w-lg shadow-xl transform transition-all">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b border-neutral-200 dark:border-neutral-700 p-4">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
            {title}
          </h3>
          <Button
            onClick={onClose}
            className="text-neutral-400 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300 focus:outline-none transition-colors"
          >
            <IoCloseSharp />
          </Button>
        </div>

        {/* Modal Content */}
        <div className="p-4 text-neutral-700 dark:text-neutral-200">
          {children}
        </div>

        {/* Modal Footer */}
        <div className="bg-neutral-50 dark:bg-neutral-700/30 px-4 py-3 sm:px-6 flex flex-col sm:flex-row-reverse gap-2 rounded-b-lg">
          <button
            type="button"
            className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-blue-500 text-base font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
          >
            Confirm
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex justify-center rounded-md border border-neutral-300 dark:border-neutral-600 shadow-sm px-4 py-2 bg-white dark:bg-neutral-600 text-base font-medium text-neutral-700 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 dark:focus:ring-neutral-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
