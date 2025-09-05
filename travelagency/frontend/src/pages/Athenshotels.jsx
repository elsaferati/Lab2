import React from "react";
import hotel1Img from '../assets/images/hotel1Img.jpg';
import dealAthensImg from "../assets/images/athenshotel.jpg";
import athenshotel2 from "../assets/images/athenshotel2.webp";
import athenshotel3 from "../assets/images/athenshotel3.avif";
import athenshotel4 from "../assets/images/athenshotel4.avif";
import athenshotel5 from "../assets/images/athenshotel5.jpeg";
import athenshotel6 from "../assets/images/athenshotel6.avif";
import athenshotel7 from "../assets/images/athenshotel7.webp";
import athenshotel8 from "../assets/images/athenshotel8.jpg";
import athenshotel9 from "../assets/images/athenshotel9.jpg";
import athenshotel10 from "../assets/images/athenshotel10.webp";
import athenshotel11 from "../assets/images/athenshotel11.jpg";
import athenshotel12 from "../assets/images/athenshotel12.avif";
import athenshotel13 from "../assets/images/athenshotel13.webp";
import athenshotel14 from "../assets/images/athenshotel14.jpg";
import athenshotel15 from "../assets/images/athenshotel15.jpg";
import athenshotel16 from "../assets/images/athenshotel16.jpg";
import athenshotel17 from "../assets/images/athenshotel17.webp";
import athenshotel18 from "../assets/images/athenshotel18.jpg";
import athenshotel19 from "../assets/images/athenshotel19.webp";
import athenshotel20 from "../assets/images/athenshotel20.jpg";
import athenshotel21 from "../assets/images/athenshotel21.webp";
import athenshotel22 from "../assets/images/athenshotel22.jpg";
import athenshotel23 from "../assets/images/athenshotel23.jpg";
import athenshotel24 from "../assets/images/athenshotel24.jpg";
import athenshotel25 from "../assets/images/athenshotel25.webp";
import athenshotel26 from "../assets/images/athenshotel26.png";
import athenshotel27 from "../assets/images/athenshotel27.jpg";
import athenshotel28 from "../assets/images/athenshotel28.avif";

const hotels = [
  { id: 0, name: "City Center Hotel", city: "Athens", rating: 7.7, ratingText: "Good", reviews: 1401, stars: 4, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,811 / 2 nights", image: dealAthensImg },
  { id: 1, name: "The Seaside Inn Hotel", city: "Athens", rating: 7.9, ratingText: "Good", reviews: 1200, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Queen", price: "€2,811 / 2 nights", image: hotel1Img },
  { id: 2, name: "Ivory Hotel", city: "Athens", rating: 5.0, ratingText: "Disappointing", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€511 / 2 nights", image: athenshotel2 },
  { id: 3, name: "Skyline Hotel", city: "Athens", rating: 8.4, ratingText: "Good", reviews: 2000, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€911 / 2 nights", image: athenshotel3 },
  { id: 4, name: "Emerald Hotel", city: "Athens", rating: 7.6, ratingText: "Good", reviews: 1210, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€796 / 2 nights", image: athenshotel4 },
  { id: 5, name: "Apollo Hotel", city: "Athens", rating: 7.7, ratingText: "Good", reviews: 888, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€828 / 2 nights", image: athenshotel5 },
  { id: 6, name: "Electra Metropolis Hotel", city: "Athens", rating: 7.2, ratingText: "Pleasant", reviews: 1501, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€788 / 2 nights", image: athenshotel6 },
  { id: 7, name: "Radisson Blu Park Hotel", city: "Athens", rating: 8.4, ratingText: "Very Good", reviews: 2171, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€873 / 2 nights", image: athenshotel7 },
  { id: 8, name: "Poseidon Hotel", city: "Athens", rating: 6.1, ratingText: "Pleasant", reviews: 901, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€601 / 2 nights", image: athenshotel8 },
  { id: 9, name: "One&Only Hotel", city: "Athens", rating: 8.2, ratingText: "Very Good", reviews: 899, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€1,744 / 2 nights", image: athenshotel9 },
  { id: 10, name: "The Dolli Hotel", city: "Athens", rating: 7.8, ratingText: "Good", reviews: 1007, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€922 / 2 nights", image: athenshotel10 },
  { id: 11, name: "Grande Bretagne Hotel", city: "Athens", rating: 9.1, ratingText: "Excellent", reviews: 1648, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€3,601 / 2 nights", image: athenshotel11 },
  { id: 12, name: "The Gate Hotel", city: "Athens", rating: 7.5, ratingText: "Pleasant", reviews: 613, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€601 / 2 nights", image: athenshotel12 },
  { id: 13, name: "President Hotel", city: "Athens", rating: 8.0, ratingText: "Good", reviews: 1691, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€860 / 2 nights", image: athenshotel13 },
  { id: 14, name: "Grand Hyatt Hotel", city: "Athens", rating: 7.9, ratingText: "Good", reviews: 1822, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€686 / 2 nights", image: athenshotel14 },
  { id: 15, name: "Philippos Hotel", city: "Athens", rating: 5.5, ratingText: "Bad", reviews: 1416, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€325 / 2 nights", image: athenshotel15 },
  { id: 16, name: "Marina Hotel", city: "Athens", rating: 5.2, ratingText: "Bad", reviews: 2438, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "3 Single", price: "€371 / 2 nights", image: athenshotel16 },
  { id: 17, name: "The Dolli Hotel", city: "Athens", rating: 8.9, ratingText: "Very Good", reviews: 2217, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,331 / 2 nights", image: athenshotel17 },
  { id: 18, name: "King George Hotel", city: "Athens", rating: 9.2, ratingText: "Excellent", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,261 / 2 nights", image: athenshotel18 },
  { id: 19, name: "Achilleas Hotel", city: "Athens", rating: 5.1, ratingText: "Bad", reviews: 2712, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€300 / 2 nights", image: athenshotel19 },
  { id: 20, name: "Downtown Hotel", city: "Athens", rating: 7.6, ratingText: "Pleasant", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€521 / 2 nights", image: athenshotel20 },
  { id: 21, name: "NEW Hotel", city: "Athens", rating: 7.5, ratingText: "Pleasant", reviews: 921, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€612 / 2 nights", image: athenshotel21 },
  { id: 22, name: "Arion Hotel", city: "Athens", rating: 4.2, ratingText: "Disappointing", reviews: 1130, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€291 / 2 nights", image: athenshotel22 },
  { id: 23, name: "Hellenic Hotel", city: "Athens", rating: 5.5, ratingText: "Bad", reviews: 2101, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€433 / 2 nights", image: athenshotel23 },
  { id: 24, name: "Novotel Hotel", city: "Athens", rating: 8.9, ratingText: "Very Good", reviews: 1511, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,081 / 2 nights", image: athenshotel24 },
  { id: 25, name: "The Margi Hotel", city: "Athens", rating: 8.9, ratingText: "Very Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,601 / 2 nights", image: athenshotel25 },
  { id: 26, name: "Wyndham Grand Hotel", city: "Athens", rating: 8.9, ratingText: "Very Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,003 / 2 nights", image: athenshotel26 },
  { id: 27, name: "Amadeus Hotel", city: "Athens", rating: 5.7, ratingText: "Bad", reviews: 991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€311 / 2 nights", image: athenshotel27 },
  { id: 28, name: "Ergon Hotel", city: "Athens", rating: 8.0, ratingText: "Good", reviews: 2991, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€710 / 2 nights", image: athenshotel28 }
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
      <h2 className="text-3xl font-bold text-center mb-8">Hotels in Vienna</h2>
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