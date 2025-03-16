import { products } from "@/dataset/products";
import FilterableProductCard from "./product/FilterableProductCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <FilterableProductCard products={products} />
    </div>
  );
}
