import Image from "next/image";

export const ProductImage = () => (
  <div className="relative mb-4 w-full overflow-hidden rounded-lg">
    <Image
      src="placeholder_400_200.svg"
      alt="Product visual"
      width={400}
      height={200}
      priority
      className="h-auto w-full"
    />
  </div>
);
