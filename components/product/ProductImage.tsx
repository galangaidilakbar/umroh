import Image from "next/image";

export const ProductImage = ({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) => (
  <div className="relative mb-4 w-full overflow-hidden rounded-lg">
    <Image
      src={image}
      alt={alt}
      width={400}
      height={200}
      priority
      className="h-auto w-full"
    />
  </div>
);
