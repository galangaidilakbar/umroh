import ProductCard from "@/components/card/ProductCard";
import UmrohHeader from "@/components/layout/UmrohHeader";

export default function FilterableProductCard({
  products,
}: {
  products: App.Data.ProductData[];
}) {
  return (
    <div>
      <UmrohHeader />

      <div className="p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
