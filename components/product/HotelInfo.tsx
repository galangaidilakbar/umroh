import { BsFillBuildingsFill } from "react-icons/bs";

export default function HotelInfo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-neutral-700 dark:text-neutral-400 group-hover:text-blue-400 dark:group-hover:text-blue-300">
        {/* <Building2 className="flex-shrink-0" /> */}
        <BsFillBuildingsFill className="flex-shrink-0" />
      </div>
      <span className="text-sm text-neutral-700 dark:text-neutral-400">
        {name}
      </span>
    </div>
  );
}
