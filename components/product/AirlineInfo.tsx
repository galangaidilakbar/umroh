import Image from "next/image";
import { GiCommercialAirplane } from "react-icons/gi";

export default function AirlineInfo({
  logo,
  name,
  departureAirport,
}: App.Data.AirLineData & { departureAirport: string }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt={name}
          width={1024}
          height={1024}
          className="h-6 w-6"
        />
        <span className="text-sm text-neutral-700 dark:text-neutral-400">
          {name}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="text-neutral-700 group-hover:text-blue-400 dark:text-neutral-400 dark:group-hover:text-blue-300">
          <GiCommercialAirplane className="flex-shrink-0"  size={24}/>
        </div>
        <span className="text-sm text-neutral-700 dark:text-neutral-400">
          {departureAirport}
        </span>
      </div>
    </>
  );
}
