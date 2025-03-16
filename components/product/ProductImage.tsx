import Image from "next/image";

export const ProductImage = () => (
  <div className="w-full relative rounded-lg overflow-hidden mb-4">
    <Image
      src="placeholder_400_200.svg"
      alt="Product visual"
      width={400}
      height={200}
      priority
      className="w-full h-auto"
    />
  </div>
);
