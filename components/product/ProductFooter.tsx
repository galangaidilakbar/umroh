import Button from "../ui/Button";

export default function ProductFooter({ price }: { price: number }) {
  const formattedPrice = price.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
  });

  return (
    <div className="grid grid-cols-2 items-center">
      <div>
        <div>Harga Mulai :</div>
        <div className="font-semibold text-orange-500">{`IDR ${formattedPrice}`}</div>
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full p-2 text-sm">
        Lihat Detail Paket
      </Button>
    </div>
  );
}
