import React from "react";
import budapesthotel from "../assets/images/budapesthotel.jpg";
import budapesthotel2 from "../assets/images/budapesthotel2.jpg";
import budapesthotel3 from "../assets/images/budapesthotel3.webp";
import budapesthotel4 from "../assets/images/budapesthotel4.jpg"; 
import budapesthotel5 from "../assets/images/budapesthotel5.jpg"; 
import budapesthotel6 from "../assets/images/budapesthotel6.webp"; 
import budapesthotel7 from "../assets/images/budapesthotel7.webp"; 
import budapesthotel8 from "../assets/images/budapesthotel8.jpg"; 
import budapesthotel9 from "../assets/images/budapesthotel9.jpg"; 
import budapesthotel10 from "../assets/images/budapesthotel10.jpg"; 
import budapesthotel11 from "../assets/images/budapesthotel11.jpg"; 
import budapesthotel12 from "../assets/images/budapesthotel12.avif"; 
import budapesthotel13 from "../assets/images/budapesthotel13.jpg"; 
import budapesthotel14 from "../assets/images/budapesthotel14.jpg"; 
import budapesthotel15 from "../assets/images/budapesthotel15.avif"; 
import budapesthotel16 from "../assets/images/budapesthotel16.jpg"; 
import budapesthotel17 from "../assets/images/budapesthotel17.jpg"; 
import budapesthotel18 from "../assets/images/budapesthotel18.jpg"; 
import budapesthotel19 from "../assets/images/budapesthotel19.jpg"; 
import budapesthotel20 from "../assets/images/budapesthotel20.avif"; 
import budapesthotel21 from "../assets/images/budapesthotel21.webp"; 
import budapesthotel22 from "../assets/images/budapesthotel22.webp"; 
import budapesthotel23 from "../assets/images/budapesthotel23.webp"; 
import budapesthotel24 from "../assets/images/budapesthotel24.jpg"; 
import budapesthotel25 from "../assets/images/budapesthotel25.JPG"; 
import budapesthotel26 from "../assets/images/budapesthotel26.avif"; 
import budapesthotel27 from "../assets/images/budapesthotel27.jpg"; 
import budapesthotel28 from "../assets/images/budapesthotel28.jpg";

const hotels = [
  { id: 1, name: "Old Town Charm Hotel", city: "Budapest", rating: 8.0, ratingText: "Good", reviews: 915, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€501 / 2 nights", image: budapesthotel },
  { id: 2, name: "Grey Hotel", city: "Budapest", rating: 8.1, ratingText: "Good", reviews: 1010, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 King", price: "€670 / 2 nights", image: budapesthotel2 },
  { id: 3, name: "The Hillton Hotel", city: "Budapest", rating: 9.0, ratingText: "Excellent", reviews: 2200, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,001 / 2 nights", image: budapesthotel3 },
  { id: 4, name: "Carlton Hotel", city: "Budapest", rating: 6.5, ratingText: "Pleasant", reviews: 811, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Double", price: "€665 / 2 nights", image: budapesthotel4 },
  { id: 5, name: "The Sapphire Hotel", city: "Budapest", rating: 8.9, ratingText: "Very Good", reviews: 1622, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,951 / 2 nights", image: budapesthotel5 },
  { id: 6, name: "The Orchid Hotel", city: "Budapest", rating: 7.2, ratingText: "Pleasant", reviews: 1501, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€811 / 2 nights", image: budapesthotel6 },
  { id: 7, name: "Soho Hotel", city: "Budapest", rating: 8.4, ratingText: "Very Good", reviews: 2171, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€873 / 2 nights", image: budapesthotel7 },
  { id: 8, name: "Crystal Hotel", city: "Budapest", rating: 6.1, ratingText: "Pleasant", reviews: 901, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Single", price: "€401 / 2 nights", image: budapesthotel8 },
  { id: 9, name: "The Royal Hotel", city: "Budapest", rating: 8.2, ratingText: "Very Good", reviews: 899, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€744 / 2 nights", image: budapesthotel9 },
  { id: 10, name: "Grand Hotel", city: "Budapest", rating: 7.7, ratingText: "Good", reviews: 1007, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€611 / 2 nights", image: budapesthotel10 },
  { id: 11, name: "New York Hotel", city: "Budapest", rating: 9.5, ratingText: "Excellent", reviews: 1648, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€3,601 / 2 nights", image: budapesthotel11 },
  { id: 12, name: "The Imperial Hotel", city: "Budapest", rating: 7.5, ratingText: "Pleasant", reviews: 613, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€601 / 2 nights", image: budapesthotel12 },
  { id: 13, name: "Paramount Hotel", city: "Budapest", rating: 8.0, ratingText: "Good", reviews: 1691, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€860 / 2 nights", image: budapesthotel13 },
  { id: 14, name: "Hillside Hotel", city: "Budapest", rating: 7.9, ratingText: "Good", reviews: 1822, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€686 / 2 nights", image: budapesthotel14 },
  { id: 15, name: "Infinity Hotel", city: "Budapest", rating: 5.5, ratingText: "Bad", reviews: 1416, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€325 / 2 nights", image: budapesthotel15 },
  { id: 16, name: "Springs Hotel", city: "Budapest", rating: 5.2, ratingText: "Bad", reviews: 2438, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "3 Single", price: "€371 / 2 nights", image: budapesthotel16 },
  { id: 17, name: "The Crown Hotel", city: "Budapest", rating: 8.9, ratingText: "Very Good", reviews: 2217, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,331 / 2 nights", image: budapesthotel17 },
  { id: 18, name: "Plaza Hotel", city: "Budapest", rating: 9.2, ratingText: "Excellent", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,261 / 2 nights", image: budapesthotel18 },
  { id: 19, name: "DownTown Hotel", city: "Budapest", rating: 5.1, ratingText: "Bad", reviews: 2712, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€300 / 2 nights", image: budapesthotel19 },
  { id: 20, name: "The Tower Hotel", city: "Budapest", rating: 7.6, ratingText: "Pleasant", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€521 / 2 nights", image: budapesthotel20 },
  { id: 21, name: "Avenue Hotel", city: "Budapest", rating: 7.5, ratingText: "Pleasant", reviews: 921, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€612 / 2 nights", image: budapesthotel21 },
  { id: 22, name: "The 5th Hotel", city: "Budapest", rating: 4.2, ratingText: "Disappointing", reviews: 1130, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€291 / 2 nights", image: budapesthotel22 },
  { id: 23, name: "The District Hotel", city: "Budapest", rating: 5.5, ratingText: "Bad", reviews: 2101, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Double", price: "€333 / 2 nights", image: budapesthotel23 },
  { id: 24, name: "Emerald Hotel", city: "Budapest", rating: 8.9, ratingText: "Very Good", reviews: 1511, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€981 / 2 nights", image: budapesthotel24 },
  { id: 25, name: "Four Seasons Hotel", city: "Budapest", rating: 8.9, ratingText: "Very Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,601 / 2 nights", image: budapesthotel25 },
  { id: 26, name: "The Kimpton Hotel", city: "Budapest", rating: 8.9, ratingText: "Very Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,003 / 2 nights", image: budapesthotel26 },
  { id: 27, name: "Amadeus Hotel", city: "Budapest", rating: 5.7, ratingText: "Bad", reviews: 991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€311 / 2 nights", image: budapesthotel27 },
  { id: 28, name: "Kozmo Hotel", city: "Budapest", rating: 8.0, ratingText: "Good", reviews: 2991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€710 / 2 nights", image: budapesthotel28 },
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
      <h2 className="text-3xl font-bold text-center mb-8">Hotels in Budapest</h2>
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