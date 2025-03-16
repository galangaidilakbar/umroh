import ProductCard from "@/components/product/ProductCard";
import UmrohHeader from "@/components/layout/UmrohHeader";

export default function FilterableProductCard({
  products,
}: {
  products: App.Data.ProductData[];
}) {
  return (
    <div>
      <UmrohHeader />

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
