import React from "react";
import dealAthensImg from "../assets/images/athenshotel.jpg";
import dealViennaImg from "../assets/images/viennahotel.jpg";
import dealBerlinImg from "../assets/images/berlinhotel.jpg";
import dealLondonImg from "../assets/images/londonhotel.webp";
import hotel1Img from '../assets/images/hotel1Img.jpg';
import hotel2Img from '../assets/images/hotel2Img.jpg';

const hotels = [
  {
    id: 1,
    name: "City Center Hotel",
    city: "Athens",
    rating: 8.6,
    ratingText: "Excellent",
    reviews: 1401,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$$",
    image: dealAthensImg ,
  },
  {
    id: 2,
    name: "Luxury Hotel",
    city: "Vienna",
    rating: 9.3,
    ratingText: "Good",
    reviews: 1020,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Queen",
    price: "$$$",
    image: dealViennaImg,
  },
  {
    id: 3,
    name: "Hotel in Berlin",
    city: "Germany",
    rating: 8.4,
    ratingText: "Excellent",
    reviews: 2213,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Queen",
    price: "$$$",
    image: dealBerlinImg,
  },
  {
    id: 4,
    name: "Hotel in London",
    city: "London",
    rating: 8.3,
    ratingText: "Excellent",
    reviews: 799,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "2 Single - 1 Double",
    price: "$$$$",
    image: dealLondonImg,
  },
  {
    id: 5,
    name: "Luxury Beachfront Hotel",
    city: "Athens",
    rating: 9.7,
    ratingText: "Good",
    reviews: 1200,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: hotel1Img,
  },
  {
    id: 6,
    name: "Grand City Hotel",
    city: "Vienna",
    rating: 7.7,
    ratingText: "Good",
    reviews: 1200,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$$",
    image: hotel2Img,
  }
];

const HotelCards = () => {
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Discover Our Hotel Deals
      </h2>
      <div className="grid gap-6 px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="h-[200px] w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {hotel.rating} / 10.0 {hotel.ratingText}
                </span>
                <span className="text-sm text-gray-500">
                  ({hotel.reviews} Ratings)
                </span>
              </div>
              <h3 className="font-bold text-lg">{hotel.name}</h3>
              <div className="text-sm text-gray-700">
                <p>{hotel.city}</p>
                <p>{hotel.guests} guests · {hotel.bedroom} bedroom · {hotel.bath} bath</p>
                <p className="font-medium">{hotel.bed}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-blue-600 font-semibold">{hotel.price}</span>
                <span className="text-sm text-gray-600">{hotel.source}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelCards;
