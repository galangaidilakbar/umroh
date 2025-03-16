import { MoveLeft, SlidersHorizontal } from "lucide-react";

export default function UmrohHeader() {
  return (
    <div className="py-4 px-6 flex justify-between items-center">
      <MoveLeft />

      <h1 className="text-base font-semibold">List Umroh</h1>

      <button className="flex items-center gap-2">
        <SlidersHorizontal />
        <span className="text-xs">Filter</span>
      </button>
    </div>
  );
}
