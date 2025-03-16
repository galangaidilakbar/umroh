interface ProductHeaderProps {
  title: string;
  duration: string;
  departureDate: string;
}

export default function ProductHeader({
  title,
  duration,
  departureDate,
}: ProductHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="text-base font-bold text-neutral-900 dark:text-white">
        <h3>{title}</h3>
        <p>{duration}</p>
      </div>
      <div className="text-right text-sm">
        <p className="text-neutral-700 dark:text-neutral-400">Berangkat</p>
        <p className="font-semibold">{departureDate}</p>
      </div>
    </div>
  );
}
