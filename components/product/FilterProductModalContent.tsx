import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function FilterProductModalContent({
    options
}: { options: string[] }) {
    return (
        <>
            {options.map((option, index) => (
                <div className="w-full border border-neutral-200 rounded-lg px-4 py-2 flex justify-between items-center mb-4" key={index}>
                    <div>{option}</div>
                    <div>
                        <MdOutlineKeyboardArrowDown />
                    </div>
                </div>
            ))}

        </>
    )
}