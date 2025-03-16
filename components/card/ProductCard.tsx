export default function ProductCard({
  product,
}: {
  product: App.Data.ProductData;
}) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{product.title}</h2>
      </div>
      <div className="card-body">
        <p>Duration: {product.duration}</p>
        <p>Departure Date: {product.departureDate}</p>
        <p>Hotels: {product.hotels.join(", ")}</p>
        <p>Airline: {product.airLine}</p>
        <p>Departure Airport: {product.departureAirport}</p>
        <p>Remaining Seats: {product.remainingSeats}</p>
        <p>Total Seats: {product.totalSeats}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}
