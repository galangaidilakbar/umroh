import { PiSlidersHorizontalLight } from "react-icons/pi";
import { GoArrowLeft } from "react-icons/go";
import Button from "../ui/Button";

export default function UmrohHeader() {
  return (
    <div className="py-4 px-6 flex justify-between items-center">
      <GoArrowLeft />

      <h1 className="text-base font-semibold">List Umroh</h1>

      <Button className="flex items-center gap-2">
        <PiSlidersHorizontalLight />

        <span className="text-xs">Filter</span>
      </Button>
    </div>
  );
}
