import { products } from "@/dataset/products";
import FilterableProductCard from "./product/FilterableProductCard";

export default function Home() {
  return (
    <div>
      <FilterableProductCard products={products} />
    </div>
  );
}
