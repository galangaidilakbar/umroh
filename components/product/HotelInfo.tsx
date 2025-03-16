import { Building2 } from "lucide-react";

export default function HotelInfo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2">
      <Building2 className="flex-shrink-0" />
      <span className="text-sm text-neutral-700 dark:text-neutral-400">
        {name}
      </span>
    </div>
  );
}
