import ProductCard from "./ProductCard";

// Helper function to extract month name from date string
const getMonthName = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("default", { month: "long" });
};

// Helper to extract airport code from departure string
const getAirportCode = (departure: string) => {
  const matches = departure.match(/\(([A-Z]{3})\)/);
  return matches ? matches[1] : null;
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
        const productAirportCode = getAirportCode(product.departureAirport);
        return productAirportCode === filter.value;

      default:
        return true;
    }
  });

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
