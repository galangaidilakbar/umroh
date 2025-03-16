import Button from "../ui/Button";

export default function ProductFooter({ price }: { price: number }) {
  const formattedPrice = price.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
  });

  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <div>Harga Mulai :</div>
        <div className="font-semibold text-orange-500 dark:text-orange-400">{`IDR ${formattedPrice}`}</div>
      </div>
      <Button className="rounded-full bg-blue-600 p-2 text-sm font-bold text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        Lihat Detail Paket
      </Button>
    </div>
  );
}
