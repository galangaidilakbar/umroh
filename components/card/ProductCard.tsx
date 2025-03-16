import Image from "next/image";

export default function ProductCard({
  product,
}: {
  product: App.Data.ProductData;
}) {
  return (
    <div className="rounded-lg bg-white p-4 shadow mb-4">
      <div className="w-full relative rounded-lg overflow-hidden mb-4">
        <Image
          src="placeholder_400_200.svg"
          alt={product.title}
          width={400}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-900">{product.title}</h3>
            <p className="text-gray-700">{product.duration}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-700">Berangkat</p>
            <p className="font-medium">{product.departureDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
