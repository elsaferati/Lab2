import React from "react";
import parishotel from "../assets/images/parishotel.jpg";
import parishotel2 from "../assets/images/parishotel2.webp";
import parishotel3 from "../assets/images/parishotel3.jpg";
import parishotel4 from "../assets/images/parishotel4.jpeg";
import parishotel5 from "../assets/images/parishotel5.jpg";
import parishotel6 from "../assets/images/parishotel6.avif";
import parishotel7 from "../assets/images/parishotel7.jpg";
import parishotel8 from "../assets/images/parishotel8.jpg";
import parishotel9 from "../assets/images/parishotel9.jpg";
import parishotel10 from "../assets/images/parishotel10.jpg";
import parishotel11 from "../assets/images/parishotel11.jpg";
import parishotel12 from "../assets/images/parishotel12.jpg";
import parishotel13 from "../assets/images/parishotel13.webp";
import parishotel14 from "../assets/images/parishotel14.webp";
import parishotel15 from "../assets/images/parishotel15.jpg";
import parishotel16 from "../assets/images/parishotel16.webp";
import parishotel17 from "../assets/images/parishotel17.jpg";
import parishotel18 from "../assets/images/parishotel18.webp";
import parishotel19 from "../assets/images/parishotel19.jpg";
import parishotel20 from "../assets/images/parishotel20.png";
import parishotel21 from "../assets/images/parishotel21.jpg";
import parishotel22 from "../assets/images/parishotel22.jpg";
import parishotel23 from "../assets/images/parishotel23.avif";
import parishotel24 from "../assets/images/parishotel24.jpg";
import parishotel25 from "../assets/images/parishotel25.jpg";
import parishotel26 from "../assets/images/parishotel26.jpeg";
import parishotel27 from "../assets/images/parishotel27.avif";
import parishotel28 from "../assets/images/parishotel28.png";
import parishotel29 from "../assets/images/parishotel29.webp";
import parishotel30 from "../assets/images/parishotel30.jpg";

const hotels = [
  { id: 1, name: "Maison Hotel", city: "Paris", rating: 9.3, ratingText: "Excellent", reviews: 1409, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,720 / 2 nights", image: parishotel },
  { id: 2, name: "The Hillton Hotel", city: "Paris", rating: 8.8, ratingText: "Very Good", reviews: 1706, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€2,720 / 2 nights", image: parishotel2 },
  { id: 3, name: "Radisson Hotel", city: "Paris", rating: 5.3, ratingText: "Bad", reviews: 834, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "1 Double-2 Single", price: "€550 / 2 nights", image: parishotel3 },
  { id: 4, name: "Sheraton Hotel", city: "Paris", rating: 8.0, ratingText: "Good", reviews: 828, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,220 / 2 nights", image: parishotel4 },
  { id: 5, name: "Seine Riverside Hotel", city: "Paris", rating: 7.5, ratingText: "Pleasant", reviews: 1113, stars: 5, guests: 4, bedroom: 2, bath: 1, bed: "2 Queen", price: "€980 / 2 nights", image: parishotel5 },
  { id: 6, name: "Lyon Hotel", city: "Paris", rating: 7.2, ratingText: "Pleasant", reviews: 1501, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€610 / 2 nights", image: parishotel6 },
  { id: 7, name: "George V Hotel", city: "Paris", rating: 9.4, ratingText: "Excellent", reviews: 2171, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,820 / 2 nights", image: parishotel7 },
  { id: 8, name: "Amour Hotel", city: "Paris", rating: 5.1, ratingText: "Bad", reviews: 901, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Single", price: "€300 / 2 nights", image: parishotel8 },
  { id: 9, name: "The Royal Hotel", city: "Paris", rating: 9.2, ratingText: "Excellent", reviews: 2899, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€4,754 / 4 nights", image: parishotel9 },
  { id: 10, name: "Blanc Hotel", city: "Paris", rating: 7.7, ratingText: "Good", reviews: 1007, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "1 Double-2 Single", price: "€700 / 2 nights", image: parishotel10 },
  { id: 11, name: "Saint James Hotel", city: "Paris", rating: 9.5, ratingText: "Excellent", reviews: 1648, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,106 / 2 nights", image: parishotel11 },
  { id: 12, name: "The Avenue Hotel", city: "Paris", rating: 7.5, ratingText: "Pleasant", reviews: 613, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€736 / 2 nights", image: parishotel12 },
  { id: 13, name: "Marais Hotel", city: "Paris", rating: 8.0, ratingText: "Good", reviews: 1691, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Queen", price: "€900 / 2 nights", image: parishotel13 },
  { id: 14, name: "Nuit d'Or Hotel", city: "Paris", rating: 7.9, ratingText: "Good", reviews: 1822, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€877 / 2 nights", image: parishotel14 },
  { id: 15, name: "Papillon Hotel", city: "Paris", rating: 5.5, ratingText: "Bad", reviews: 1416, stars: 5, guests: 4, bedroom: 1, bath: 1, bed: "2 Double", price: "€757 / 2 nights", image: parishotel15 },
  { id: 16, name: "Le Rêveur Hotel", city: "Paris", rating: 5.2, ratingText: "Bad", reviews: 2438, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double-1 Single", price: "€698 / 3 nights", image: parishotel16 },
  { id: 17, name: "Bulgari Hotel", city: "Paris", rating: 8.9, ratingText: "Very Good", reviews: 2217, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€3,120 / 2 nights", image: parishotel17 },
  { id: 18, name: "Montfleuri Hotel", city: "Paris", rating: 8.0, ratingText: "Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€920 / 2 nights", image: parishotel18 },
  { id: 19, name: "Horizon Hotel", city: "Paris", rating: 8.0, ratingText: "Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€820 / 2 nights", image: parishotel22 },
  { id: 20, name: "D’Or Hotel", city: "Paris", rating: 7.6, ratingText: "Pleasant", reviews: 801, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€762 / 2 nights", image: parishotel20 },
  { id: 21, name: "Mont Bleu Hotel", city: "Paris", rating: 7.7, ratingText: "Pleasant", reviews: 921, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€720 / 3 nights", image: parishotel21 },
  { id: 22, name: "La Vue Hotel", city: "Paris", rating: 4.2, ratingText: "Disappointing", reviews: 1130, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€520 / 2 nights", image: parishotel19 },
  { id: 23, name: "Mirage Hotel", city: "Paris", rating: 5.5, ratingText: "Bad", reviews: 2101, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "2 Double", price: "€642 / 2 nights", image: parishotel23 },
  { id: 24, name: "L’Olivier Hotel", city: "Paris", rating: 8.9, ratingText: "Very Good", reviews: 1511, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,003 / 2 nights", image: parishotel24 },
  { id: 25, name: "J'Adore Paris Hotel", city: "Paris", rating: 8.8, ratingText: "Very Good", reviews: 1711, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€1,991 / 2 nights", image: parishotel25 },
  { id: 26, name: "Recamier Hotel", city: "Paris", rating: 8.9, ratingText: "Very Good", reviews: 2712, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 King", price: "€2,120 / 2 nights", image: parishotel26 },
  { id: 27, name: "Maison Breguet Hotel", city: "Paris", rating: 8.0, ratingText: "Good", reviews: 2991, stars: 5, guests: 3, bedroom: 1, bath: 1, bed: "1 Double", price: "€1,000 / 2 nights", image: parishotel27 },
  { id: 28, name: "The Empire Hotel", city: "Paris", rating: 8.2, ratingText: "Good", reviews: 1291, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€1,625 / 2 nights", image: parishotel28 },
  { id: 29, name: "Les Jardins Secrets Hotel", city: "Paris", rating: 5.0, ratingText: "Disappointing", reviews: 1791, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€601 / 2 nights", image: parishotel29 },
  { id: 30, name: "L’Aube Douce Hotel", city: "Paris", rating: 5.5, ratingText: "Bad", reviews: 1211, stars: 5, guests: 2, bedroom: 1, bath: 1, bed: "1 Double", price: "€720 / 2 nights", image: parishotel30 },
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
      <h2 className="text-3xl font-bold text-center mb-8">Hotels in Milano</h2>
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