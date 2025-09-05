import React from "react";
import dealLondonImg from "../assets/images/londonhotel.webp";
import londonhotel2 from "../assets/images/londonhotel2.jpg";
import londonhotel3 from "../assets/images/londonhotel3.jpg";
import londonhotel4 from "../assets/images/londonhotel4.jpg";
import londonhotel5 from "../assets/images/londonhotel5.jpg";
import londonhotel6 from "../assets/images/londonhotel6.avif";
import londonhotel7 from "../assets/images/londonhotel7.jpg";
import londonhotel8 from "../assets/images/londonhotel8.jpeg";
import londonhotel9 from "../assets/images/londonhotel9.jpg";
import londonhotel10 from "../assets/images/londonhotel10.avif";
import londonhotel11 from "../assets/images/londonhotel11.webp";
import londonhotel12 from "../assets/images/londonhotel12.jpg";
import londonhotel13 from "../assets/images/londonhotel13.avif";
import londonhotel14 from "../assets/images/londonhotel14.avif";
import londonhotel15 from "../assets/images/londonhotel15.jpg";
import londonhotel16 from "../assets/images/londonhotel16.avif";
import londonhotel17 from "../assets/images/londonhotel17.jpg";
import londonhotel18 from "../assets/images/londonhotel18.webp";
import londonhotel19 from "../assets/images/londonhotel19.jpg";
import londonhotel20 from "../assets/images/londonhotel20.jpg";
import londonhotel21 from "../assets/images/londonhotel21.webp";
import londonhotel22 from "../assets/images/londonhotel22.webp";
import londonhotel23 from "../assets/images/londonhotel23.jpg";
import londonhotel24 from "../assets/images/londonhotel24.webp";
import londonhotel25 from "../assets/images/londonhotel25.jpg";
import londonhotel26 from "../assets/images/londonhotel26.avif";
import londonhotel27 from "../assets/images/londonhotel27.jpg";

const hotels = [
  { id: 1, name: "The Plaza Hotel", city: "London", rating: 9.3, ratingText: "Excellent", reviews: 799, stars: 4, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,996 / 2 nights", image: dealLondonImg },
  { id: 2, name: "St George Hotel", city: "London", rating: 5.3, ratingText: "Bad", reviews: 901, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Queen", price: "€796 / 2 nights", image: londonhotel2 },
  { id: 3, name: "The Kensington Hotel", city: "London", rating: 9.1, ratingText: "Excellent", reviews: 1108, stars: 5, guests: 2, bedroom: 2, bath: 1, bed: "1 King", price: "€2,622 / 2 nights", image: londonhotel3 },
  { id: 4, name: "Alexandra Hotel", city: "London", rating: 7.0, ratingText: "Pleasant", reviews: 741, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Double", price: "€896 / 2 nights", image: londonhotel4 },
  { id: 5, name: "The Savoy Hotel", city: "London", rating: 8.9, ratingText: "Very Good", reviews: 1777, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,996 / 2 nights", image: londonhotel5 },
  { id: 6, name: "Mayfair Hotel", city: "London", rating: 7.2, ratingText: "Pleasant", reviews: 1501, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€732 / 2 nights", image: londonhotel6 },
  { id: 7, name: "The Ritz Hotel", city: "London", rating: 8.4, ratingText: "Very Good", reviews: 2171, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,961 / 2 nights", image: londonhotel7 },
  { id: 8, name: "Saint Hotel", city: "London", rating: 6.6, ratingText: "Pleasant", reviews: 901, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€642 / 2 nights", image: londonhotel8 },
  { id: 9, name: "The Beaumont Hotel", city: "London", rating: 8.2, ratingText: "Very Good", reviews: 1899, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€1,006 / 2 nights", image: londonhotel9 },
  { id: 10, name: "The Marylebone Hotel", city: "London", rating: 7.7, ratingText: "Good", reviews: 1007, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€886 / 2 nights", image: londonhotel10 },
  { id: 11, name: "St.James's Hotel", city: "London", rating: 8.5, ratingText: "Very Good", reviews: 1648, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€1,686 / 2 nights", image: londonhotel11 },
  { id: 12, name: "The Phoenix Hotel", city: "London", rating: 7.5, ratingText: "Pleasant", reviews: 613, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€720 / 2 nights", image: londonhotel12 },
  { id: 13, name: "The Byron Hotel", city: "London", rating: 8.0, ratingText: "Good", reviews: 1691, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,080 / 2 nights", image: londonhotel13 },
  { id: 14, name: "St.Athans Hotel", city: "London", rating: 7.9, ratingText: "Good", reviews: 1822, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€826 / 2 nights", image: londonhotel14 },
  { id: 15, name: "Hampton Hotel", city: "London", rating: 5.5, ratingText: "Bad", reviews: 1416, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€563 / 2 nights", image: londonhotel15 },
  { id: 16, name: "Moonlight Hotel", city: "London", rating: 5.2, ratingText: "Bad", reviews: 2438, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double", price: "€480 / 2 nights", image: londonhotel16 },
  { id: 17, name: "Claridge’s Hotel", city: "London", rating: 8.9, ratingText: "Very Good", reviews: 2217, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,001 / 2 nights", image: londonhotel17 },
  { id: 18, name: "Brown’s Hotel", city: "London", rating: 8.4, ratingText: "Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€894 / 2 nights", image: londonhotel18 },
  { id: 19, name: "Adria Hotel", city: "London", rating: 5.1, ratingText: "Bad", reviews: 2712, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€506 / 2 nights", image: londonhotel19 },
  { id: 20, name: "The Franklin Hotel", city: "London", rating: 7.6, ratingText: "Pleasant", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€856 / 2 nights", image: londonhotel20 },
  { id: 21, name: "Egerton Hotel", city: "London", rating: 7.5, ratingText: "Pleasant", reviews: 921, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€680 / 2 nights", image: londonhotel21 },
  { id: 22, name: "Wardonia Hotel", city: "London", rating: 4.2, ratingText: "Disappointing", reviews: 1130, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€437 / 2 nights", image: londonhotel22 },
  { id: 23, name: "Jade Hotel", city: "London", rating: 5.5, ratingText: "Bad", reviews: 2101, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€490 / 2 nights", image: londonhotel23 },
  { id: 24, name: "Charlotte Street Hotel", city: "London", rating: 8.9, ratingText: "Very Good", reviews: 1511, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,810 / 2 nights", image: londonhotel24 },
  { id: 25, name: "The Bentley Hotel", city: "London", rating: 9.3, ratingText: "Excellent", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,886 / 2 nights", image: londonhotel25 },
  { id: 26, name: "The Waldorf Hotel", city: "London", rating: 8.9, ratingText: "Very Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,256 / 2 nights", image: londonhotel26 },
  { id: 27, name: "Luna Hotel", city: "London", rating: 5.9, ratingText: "Bad", reviews: 991, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "2 Double-1 Single", price: "€486 / 2 nights", image: londonhotel27 },
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
      <h2 className="text-3xl font-bold text-center mb-8">Hotels in London</h2>
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