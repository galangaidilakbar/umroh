import { Plane } from "lucide-react";
import Image from "next/image";

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
          className="w-6 h-6"
        />
        <span className="text-sm text-gray-700">{name}</span>
      </div>

      <div className="flex items-center gap-2">
        <Plane className="flex-shrink-0" />
        <span className="text-sm text-gray-700">{departureAirport}</span>
      </div>
    </>
  );
}
