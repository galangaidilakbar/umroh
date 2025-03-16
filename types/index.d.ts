declare namespace App.Data {
  export type ProductData = {
    id: number;
    title: string;
    image: string;
    duration: string;
    departureDate: string;
    hotels: string[];
    airLine: AirLineData;
    departureAirport: string;
    remainingSeats: number;
    totalSeats: number;
    price: number;
  };
  export type AirLineData = {
    name: string;
    logo: string;
  };
}
