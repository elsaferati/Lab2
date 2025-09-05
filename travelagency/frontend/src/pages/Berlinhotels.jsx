import React from "react";
import dealBerlinImg from "../assets/images/berlinhotel.jpg";
import berlinhotel2 from "../assets/images/berlinhotel2.jpg";
import berlinhotel3 from "../assets/images/berlinhotel3.jpg";
import berlinhotel4 from "../assets/images/berlinhotel4.jpg";
import berlinhotel5 from "../assets/images/berlinhotel5.jpg";
import berlinhotel6 from "../assets/images/berlinhotel6.webp";
import berlinhotel7 from "../assets/images/berlinhotel7.jpg";
import berlinhotel8 from "../assets/images/berlinhotel8.jpg";
import berlinhotel9 from "../assets/images/berlinhotel9.webp";
import berlinhotel10 from "../assets/images/berlinhotel10.jpg";
import berlinhotel11 from "../assets/images/berlinhotel11.jpg";
import berlinhotel12 from "../assets/images/berlinhotel12.jpg";
import berlinhotel13 from "../assets/images/berlinhotel13.jpg";
import berlinhotel14 from "../assets/images/berlinhotel14.jpg";
import berlinhotel15 from "../assets/images/berlinhotel15.jpg";
import berlinhotel16 from "../assets/images/berlinhotel16.jpg";
import berlinhotel17 from "../assets/images/berlinhotel17.jpg";
import berlinhotel18 from "../assets/images/berlinhotel18.webp";
import berlinhotel19 from "../assets/images/berlinhotel19.webp";
import berlinhotel20 from "../assets/images/berlinhotel20.avif";
import berlinhotel21 from "../assets/images/berlinhotel21.jpg";
import berlinhotel22 from "../assets/images/berlinhotel22.jpg";
import berlinhotel23 from "../assets/images/berlinhotel23.webp";
import berlinhotel24 from "../assets/images/berlinhotel24.webp";
import berlinhotel25 from "../assets/images/berlinhotel25.avif";
import berlinhotel26 from "../assets/images/berlinhotel26.jpg";
import berlinhotel27 from "../assets/images/berlinhotel27.webp";
import berlinhotel28 from "../assets/images/berlinhotel28.jpg";
import berlinhotel29 from "../assets/images/berlinhotel29.avif";
import berlinhotel30 from "../assets/images/berlinhotel30.jpg";
import berlinhotel31 from "../assets/images/berlinhotel31.jpg";
import berlinhotel32 from "../assets/images/berlinhotel32.jpg";

const hotels = [
  { id: 1, name: "The Marriott Hotel", city: "Berlin", rating: 8.0, ratingText: "Good", reviews: 2213, stars: 4, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,800 / 2 nights", image: dealBerlinImg },
  { id: 2, name: "RN Hotel", city: "Berlin", rating: 5.6, ratingText: "Bad", reviews: 600, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Queen", price: "€750 / 2 nights", image: berlinhotel2 },
  { id: 3, name: "The Hillton Hotel", city: "Berlin", rating: 9.0, ratingText: "Excellent", reviews: 2200, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,001 / 2 nights", image: berlinhotel3 },
  { id: 4, name: "Carlton Hotel", city: "Berlin", rating: 6.5, ratingText: "Pleasant", reviews: 811, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Double", price: "€665 / 2 nights", image: berlinhotel4 },
  { id: 5, name: "The Sapphire Hotel", city: "Berlin", rating: 8.9, ratingText: "Very Good", reviews: 1622, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,951 / 2 nights", image: berlinhotel5 },
  { id: 6, name: "The Orchid Hotel", city: "Berlin", rating: 7.2, ratingText: "Pleasant", reviews: 1501, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€811 / 2 nights", image: berlinhotel6 },
  { id: 7, name: "Soho Hotel", city: "Berlin", rating: 8.4, ratingText: "Very Good", reviews: 2171, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€873 / 2 nights", image: berlinhotel7 },
  { id: 8, name: "Crystal Hotel", city: "Berlin", rating: 6.1, ratingText: "Pleasant", reviews: 901, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Single", price: "€401 / 2 nights", image: berlinhotel8 },
  { id: 9, name: "The Royal Hotel", city: "Berlin", rating: 8.2, ratingText: "Very Good", reviews: 899, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€744 / 2 nights", image: berlinhotel9 },
  { id: 10, name: "Grand Hotel", city: "Berlin", rating: 7.7, ratingText: "Good", reviews: 1007, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€611 / 2 nights", image: berlinhotel10 },
  { id: 11, name: "New York Hotel", city: "Berlin", rating: 9.5, ratingText: "Excellent", reviews: 1648, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€3,601 / 2 nights", image: berlinhotel11 },
  { id: 12, name: "The Imperial Hotel", city: "Berlin", rating: 7.5, ratingText: "Pleasant", reviews: 613, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€601 / 2 nights", image: berlinhotel12 },
  { id: 13, name: "Paramount Hotel", city: "Berlin", rating: 8.0, ratingText: "Good", reviews: 1691, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€860 / 2 nights", image: berlinhotel13 },
  { id: 14, name: "Hillside Hotel", city: "Berlin", rating: 7.9, ratingText: "Good", reviews: 1822, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€686 / 2 nights", image: berlinhotel14 },
  { id: 15, name: "Infinity Hotel", city: "Berlin", rating: 5.5, ratingText: "Bad", reviews: 1416, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€325 / 2 nights", image: berlinhotel15 },
  { id: 16, name: "Springs Hotel", city: "Berlin", rating: 5.2, ratingText: "Bad", reviews: 2438, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "3 Single", price: "€371 / 2 nights", image: berlinhotel16 },
  { id: 17, name: "The Crown Hotel", city: "Berlin", rating: 8.9, ratingText: "Very Good", reviews: 2217, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,331 / 2 nights", image: berlinhotel17 },
  { id: 18, name: "Plaza Hotel", city: "Berlin", rating: 9.2, ratingText: "Excellent", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,261 / 2 nights", image: berlinhotel18 },
  { id: 19, name: "DownTown Hotel", city: "Berlin", rating: 5.1, ratingText: "Bad", reviews: 2712, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€300 / 2 nights", image: berlinhotel19 },
  { id: 20, name: "The Tower Hotel", city: "Berlin", rating: 7.6, ratingText: "Pleasant", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€521 / 2 nights", image: berlinhotel20 },
  { id: 21, name: "Avenue Hotel", city: "Berlin", rating: 7.5, ratingText: "Pleasant", reviews: 921, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€612 / 2 nights", image: berlinhotel21 },
  { id: 22, name: "The 5th Hotel", city: "Berlin", rating: 4.2, ratingText: "Disappointing", reviews: 1130, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€291 / 2 nights", image: berlinhotel22 },
  { id: 23, name: "The District Hotel", city: "Berlin", rating: 5.5, ratingText: "Bad", reviews: 2101, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Double", price: "€333 / 2 nights", image: berlinhotel23 },
  { id: 24, name: "Emerald Hotel", city: "Berlin", rating: 8.9, ratingText: "Very Good", reviews: 1511, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€981 / 2 nights", image: berlinhotel24 },
  { id: 25, name: "Four Seasons Hotel", city: "Berlin", rating: 8.9, ratingText: "Very Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,601 / 2 nights", image: berlinhotel25 },
  { id: 26, name: "The Kimpton Hotel", city: "Berlin", rating: 8.9, ratingText: "Very Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,003 / 2 nights", image: berlinhotel26 },
  { id: 27, name: "Amadeus Hotel", city: "Berlin", rating: 5.7, ratingText: "Bad", reviews: 991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€311 / 2 nights", image: berlinhotel27 },
  { id: 28, name: "Kozmo Hotel", city: "Berlin", rating: 8.0, ratingText: "Good", reviews: 2991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€710 / 2 nights", image: berlinhotel28 },
  { id: 29, name: "Continental Hotel", city: "Berlin", rating: 6.8, ratingText: "Pleasant", reviews: 1201, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€540 / 2 nights", image: berlinhotel29 },
  { id: 30, name: "The Ritz Hotel", city: "Berlin", rating: 9.4, ratingText: "Excellent", reviews: 3110, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,200 / 2 nights", image: berlinhotel30 },
  { id: 31, name: "Hotel de Rome", city: "Berlin", rating: 8.7, ratingText: "Very Good", reviews: 1887, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€1,250 / 2 nights", image: berlinhotel31 },
  { id: 32, name: "Grand City Hotel", city: "Berlin", rating: 8.3, ratingText: "Good", reviews: 2711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,094 / 2 nights", image: berlinhotel32 },
];

const HotelCards = () => {
  const bookHotel = async (hotel) => { 
    try {
      const response = await fetch(
        `http://localhost:8080/Lab/Lab2/travelagency/backend/api/hotels.php?id=${hotel.id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: hotel.name || "No Name",
            city: hotel.city || "Unknown",
            rating: hotel.rating || 0,
            ratingText: hotel.ratingText || "",
            reviews: hotel.reviews || 0,
            guests: hotel.guests || 0,
            bedroom: hotel.bedroom || 0,
            bath: hotel.bath || 0,
            bed: hotel.bed || "",
            price: Number(hotel.price.toString().replace(/[^0-9.]/g, "")) || 0
          })
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("📥 Response from PHP:", data);
      alert(data.success ? "Hotel booked!" : "Booking failed: " + (data.error || ""));
    } catch (error) {
      console.error("❌ Fetch error:", error);
      alert("Error booking hotel! " + error.message);
    }
  };
  

  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Hotels in Berlin</h2>
      <div className="grid gap-6 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={hotel.image} alt={hotel.name} className="h-[200px] w-full object-cover" />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {hotel.rating} / 10.0 {hotel.ratingText}
                </span>
                <span className="text-sm text-gray-500">({hotel.reviews} Ratings)</span>
              </div>
              <h3 className="font-bold text-lg">{hotel.name}</h3>
              <div className="text-sm text-gray-700">
                <p>{hotel.city}</p>
                <p>{hotel.guests} guests · {hotel.bedroom} bedroom · {hotel.bath} bath</p>
                <p className="font-medium">{hotel.bed}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-blue-600 font-semibold">{hotel.price}</span>
              </div>
             
              <button
                onClick={() => bookHotel(hotel)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-xl transition mt-2"
              >
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelCards;