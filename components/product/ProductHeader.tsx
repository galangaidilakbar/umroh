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
      <div className="font-bold text-base text-gray-900">
        <h3>{title}</h3>
        <p>{duration}</p>
      </div>
      <div className="text-right text-sm">
        <p className="text-gray-700">Berangkat</p>
        <p className="font-semibold">{departureDate}</p>
      </div>
    </div>
  );
}
