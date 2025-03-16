export default function SeatInfo({
  remainingSeats,
  totalSeats,
}: {
  remainingSeats: number;
  totalSeats: number;
}) {
  // Calculate occupancy percentage
  const occupancyPercentage = Math.round(
    ((totalSeats - remainingSeats) / totalSeats) * 100,
  );

  // Determine color based on occupancy thresholds
  const getColorClasses = (percentage: number) => {
    if (percentage >= 90) return { bg: "bg-red-600", text: "text-red-600" };
    if (percentage >= 70)
      return { bg: "bg-yellow-400", text: "text-yellow-600" };
    return { bg: "bg-green-500", text: "text-green-600" };
  };

  const { bg, text } = getColorClasses(occupancyPercentage);

  return (
    <div className="grid grid-cols-3 items-center gap-2">
      <div className="col-span-2 h-2.5 w-full rounded-full bg-gray-200">
        <div
          className={`${bg} h-2.5 rounded-full transition-all duration-300`}
          style={{ width: `${occupancyPercentage}%` }}
        ></div>
      </div>
      <div className={`text-right text-sm font-semibold ${text}`}>
        Tersisa {remainingSeats} Seat
      </div>
    </div>
  );
}
