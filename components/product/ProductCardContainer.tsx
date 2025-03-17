import ProductCard from "./ProductCard";
import { FaTriangleExclamation } from "react-icons/fa6";

// Helper function to extract month name from date string
const getMonthName = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long" });
};

export default function ProductCardContainer({
  products,
  filter,
}: {
  products: App.Data.ProductData[];
  filter: { by: string | null; value: string };
}) {
  const filteredProducts = products.filter((product) => {
    if (!filter.by || !filter.value) return true; // No filter applied

    switch (filter.by) {
      case "MONTH":
        const productMonth = getMonthName(product.departureDate);
        return productMonth.toLowerCase() === filter.value.toLowerCase();

      case "TYPE":
        return product.type.toLowerCase() === filter.value.toLowerCase();

      case "AIRPORT":
        return (
          product.departureAirport.toLowerCase() === filter.value.toLowerCase()
        );

      default:
        return true;
    }
  });

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center">
        <FaTriangleExclamation className="mb-4 h-24 w-24 text-neutral-100 dark:text-neutral-200" />
        <h3 className="mb-2 text-xl font-semibold text-white">
          No Products Found
        </h3>
        <p className="mx-auto max-w-md text-neutral-100 dark:text-gray-200">
          We could not find any packages matching your filters. Try adjusting
          your search criteria or clearing the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
