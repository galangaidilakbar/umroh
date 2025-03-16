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

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
