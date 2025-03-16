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
    <div className="flex justify-between items-start">
      <div className="font-bold text-base text-neutral-900 dark:text-white">
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
