import { ProductImage } from "./ProductImage";
import ProductHeader from "./ProductHeader";
import HotelInfo from "./HotelInfo";
import AirlineInfo from "./AirlineInfo";
import SeatInfo from "./SeatInfo";
import ProductFooter from "./ProductFooter";

export default function ProductCard({
  product,
}: {
  product: App.Data.ProductData;
}) {
  return (
    <div className="rounded-lg bg-white dark:bg-neutral-800 p-4 shadow mb-4">
      <ProductImage />

      <div className="space-y-3 divide-y-2 divide-neutral-200">
        <ProductHeader
          title={product.title}
          duration={product.duration}
          departureDate={product.departureDate}
        />

        <div className="space-y-2 py-2">
          {product.hotels.map((hotel, index) => (
            <HotelInfo key={index} name={hotel} />
          ))}

          <AirlineInfo
            logo={product.airLine.logo}
            name={product.airLine.name}
            departureAirport={product.departureAirport}
          />
        </div>

        <div className="space-y-3">
          <SeatInfo
            remainingSeats={product.remainingSeats}
            totalSeats={product.totalSeats}
          />
          <div>price</div>
          <ProductFooter price={product.price} />
        </div>
      </div>
    </div>
  );
}
