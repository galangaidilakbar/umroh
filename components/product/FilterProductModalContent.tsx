import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function FilterProductModalContent({
  options,
}: {
  options: string[];
}) {
  return (
    <>
      {options.map((option, index) => (
        <div
          className="mb-4 flex w-full items-center justify-between rounded-lg border border-neutral-200 px-4 py-2"
          key={index}
        >
          <div>{option}</div>
          <div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      ))}
    </>
  );
}
