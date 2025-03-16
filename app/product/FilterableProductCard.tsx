import ProductCard from "@/components/product/ProductCard";
import UmrohHeader from "@/components/layout/UmrohHeader";

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

        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
