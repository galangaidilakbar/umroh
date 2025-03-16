import UmrohHeader from "@/components/layout/UmrohHeader";
import ProductCardContainer from "@/components/product/ProductCardContainer";

export default function FilterableProductCard({
  products,
}: {
  products: App.Data.ProductData[];
}) {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 h-[50vh] w-full rounded-b-full bg-[url(/bg_pattern.svg)] bg-cover bg-center bg-no-repeat" />

      {/* Content */}
      <div className="relative z-10">
        <UmrohHeader />

        <ProductCardContainer products={products} />
      </div>
    </div>
  );
}
