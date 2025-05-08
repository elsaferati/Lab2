import React from "react";

import budapesthotel from "../assets/images/budapesthotel.jpg";
import budapesthotel2 from "../assets/images/budapesthotel2.jpg";
import budapesthotel3 from "../assets/images/budapesthotel3.webp";
import budapesthotel4 from "../assets/images/budapesthotel4.jpg"; 
import budapesthotel5 from "../assets/images/budapesthotel5.jpg"; 

import milanohotel from "../assets/images/milanohotel.jpg";
import milanohotel2 from "../assets/images/milanohotel2.webp";
import milanohotel3 from "../assets/images/milanohotel3.avif";
import milanohotel4 from "../assets/images/milanohotel4.jpg";
import milanohotel5 from "../assets/images/milanohotel5.jpg";

import parishotel from "../assets/images/parishotel.jpg";
import parishotel2 from "../assets/images/parishotel2.webp";
import parishotel3 from "../assets/images/parishotel3.jpg";
import parishotel4 from "../assets/images/parishotel4.jpeg";
import parishotel5 from "../assets/images/parishotel5.jpg";

import dealLondonImg from "../assets/images/londonhotel.webp";
import londonhotel2 from "../assets/images/londonhotel2.jpg";
import londonhotel3 from "../assets/images/londonhotel3.jpg";
import londonhotel4 from "../assets/images/londonhotel4.jpg";

import dealBerlinImg from "../assets/images/berlinhotel.jpg";
import berlinhotel2 from "../assets/images/berlinhotel2.jpg";
import berlinhotel3 from "../assets/images/berlinhotel3.jpg";
import berlinhotel4 from "../assets/images/berlinhotel4.jpg";
import berlinhotel5 from "../assets/images/berlinhotel5.jpg";

import hotel2Img from '../assets/images/hotel2Img.jpg';
import dealViennaImg from "../assets/images/viennahotel.jpg";
import viennahotel2 from "../assets/images/viennahotel2.jpg";
import viennahotel3 from "../assets/images/viennahotel3.webp";
import viennahotel4 from "../assets/images/viennahotel4.jpg";
import viennahotel5 from "../assets/images/viennahotel5.avif";

import hotel1Img from '../assets/images/hotel1Img.jpg';
import dealAthensImg from "../assets/images/athenshotel.jpg";
import athenshotel2 from "../assets/images/athenshotel2.webp";
import athenshotel3 from "../assets/images/athenshotel3.avif";
import athenshotel4 from "../assets/images/athenshotel4.avif";
import athenshotel5 from "../assets/images/athenshotel5.jpeg";


const hotels = [
  {
    id: 1,
    name: "City Center Hotel",
    city: "Athens",
    rating: 7.7,
    ratingText: "Good",
    reviews: 1401,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: dealAthensImg ,
  },
  {
    id: 2,
    name: "Luxury Hotel",
    city: "Vienna",
    rating: 9.0,
    ratingText: "Very Good",
    reviews: 1020,
    stars: 5,
    guests: 3,
    bedroom: 2,
    bath: 1,
    bed: "1 King - 1 Queen",
    price: "$$$",
    image: dealViennaImg,
  },
  {
    id: 3,
    name: "The Marriott Hotel",
    city: "Berlin",
    rating: 8.0,
    ratingText: "Good",
    reviews: 2213,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$",
    image: dealBerlinImg,
  },
  {
    id: 4,
    name: "The Plaza Hotel",
    city: "London",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 799,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: dealLondonImg,
  },
  {
    id: 5,
    name: "The Seaside Inn Hotel",
    city: "Athens",
    rating: 7.9,
    ratingText: "Good",
    reviews: 1200,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Queen",
    price: "$$$",
    image: hotel1Img,
  },
  {
    id: 6,
    name: "Grand City Hotel",
    city: "Vienna",
    rating: 7.1,
    ratingText: "Pleasant",
    reviews: 830,
    stars: 4,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$$",
    image: hotel2Img,
  },
  {
    id: 7,
    name: "Belmond Hotel",
    city: "Milano",
    rating: 6.8,
    ratingText: "Pleasant",
    reviews: 753,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$",
    image: milanohotel3,
  },
  {
    id: 8,
    name: "Old Town Charm Hotel",
    city: "Budapest",
    rating: 8.0,
    ratingText: "Good",
    reviews: 915,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$",
    image: budapesthotel,
  },

  {
    id: 10,
    name: "The Kensington Hotel",
    city: "London",
    rating: 9.1,
    ratingText: "Excellent",
    reviews: 1108,
    stars: 5,
    guests: 2,
    bedroom: 2,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: londonhotel3,
  },
  {
    id: 8,
    name: "St George Hotel",
    city: "London",
    rating: 5.3,
    ratingText: "Bad",
    reviews: 901,
    stars: 5,
    guests: 4,
    bedroom: 1,
    bath: 1,
    bed: "2 Queen",
    price: "$",
    image: londonhotel2,
  },
  {
    id: 5,
    name: "Stefanie Hotel",
    city: "Vienna",
    rating: 8.1,
    ratingText: "Good",
    reviews: 1111,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Double",
    price: "$$",
    image: viennahotel2,
  },
  {
    id: 5,
    name: "Ivory Hotel",
    city: "Athens",
    rating: 5.0,
    ratingText: "Disappointing",
    reviews: 801,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$",
    image: athenshotel2,
  },

  {
    id: 5,
    name: "Park Hyatt Hotel",
    city: "Milano",
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 1711,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: milanohotel,
  },
  {
    id: 5,
    name: "Skyline Hotel",
    city: "Athens",
    rating: 8.4,
    ratingText: "Good",
    reviews: 2000,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$",
    image: athenshotel3,
  },
  {
    id: 5,
    name: "Titanic Hotel",
    city: "Berlin",
    rating: 8.7,
    ratingText: "Good",
    reviews: 992,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Double",
    price: "$$",
    image: berlinhotel5,
  },
  {
    id: 5,
    name: "The Hilton Hotel",
    city: "Budapest",
    rating: 9.0,
    ratingText: "Excellent",
    reviews: 2200,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: budapesthotel3,
  },

  {
    id: 5,
    name: "The Ritz Hotel",
    city: "Vienna",
    rating: 8.7,
    ratingText: "Very Good",
    reviews: 1606,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$$",
    image: viennahotel4,
  },{
    id: 5,
    name: "Maison Hotel",
    city: "Paris",
    rating: 9.3,
    ratingText: "Excellent",
    reviews: 1409,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: parishotel,
  },
  {
    id: 11,
    name: "Evergreen Hotel",
    city: "Berlin",
    rating: 7.0,
    ratingText: "Pleasant",
    reviews: 710,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Double",
    price: "$$$",
    image: berlinhotel3,
  },

  {
    id: 5,
    name: "Seine Riverside Hotel",
    city: "Paris",
    rating: 7.5,
    ratingText: "Pleasant",
    reviews: 1113,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Queen",
    price: "$$",
    image: parishotel5,
  },
  {
    id: 5,
    name: "Neo Hotel",
    city: "Milano",
    rating: 5.2,
    ratingText: "Bad",
    reviews: 700,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Queen",
    price: "$",
    image: milanohotel2,
  },
  
  {
    id: 5,
    name: "Radisson Hotel",
    city: "Paris",
    rating: 5.3,
    ratingText: "Bad",
    reviews: 834,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "1 Double-2 Single",
    price: "$$",
    image: parishotel3,
  },
  {
    id: 5,
    name: "Grey Hotel",
    city: "Budapest",
    rating: 8.3,
    ratingText: "Good",
    reviews: 1010,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 King",
    price: "$$$",
    image: budapesthotel2,
  },
  {
    id: 5,
    name: "Alexandra Hotel",
    city: "London",
    rating: 7.0,
    ratingText: "Pleasant",
    reviews: 741,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Double",
    price: "$$",
    image: londonhotel4,
  },
  {
    id: 5,
    name: "Armani Hotel",
    city: "Milano",
    rating: 8.9,
    ratingText: "Very Good",
    reviews: 1777,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: milanohotel5,
  },

  {
    id: 5,
    name: "Oval Hotel",
    city: "Vienna",
    rating: 8.2,
    ratingText: "Good",
    reviews: 1000,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$",
    image: viennahotel3,
  },
  {
    id: 5,
    name: "Astoria Hotel",
    city: "Berlin",
    rating: 7.0,
    ratingText: "Pleasant",
    reviews: 1221,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$",
    image: berlinhotel4,
  },
  {
    id: 5,
    name: "Carlton Hotel",
    city: "Budapest",
    rating: 6.5,
    ratingText: "Pleasant",
    reviews: 811,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Double",
    price: "$$",
    image: budapesthotel4,
  },
  {
    id: 5,
    name: "The Hillton Hotel",
    city: "Paris",
    rating: 8.8,
    ratingText: "Very Good",
    reviews: 1706,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 Double",
    price: "$$$",
    image: parishotel2,
  },
  
  {
    id: 5,
    name: "Apollo Hotel",
    city: "Athens",
    rating: 7.7,
    ratingText: "Good",
    reviews: 888,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$",
    image: athenshotel5,
  },

  {
    id: 5,
    name: "The Sapphire Hotel",
    city: "Budapest",
    rating: 8.9,
    ratingText: "Very Good",
    reviews: 1622,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: budapesthotel5,
  },
  {
    id: 5,
    name: "The Royal Hotel",
    city: "Vienna",
    rating: 9.2,
    ratingText: "Excellent",
    reviews: 911,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 2,
    bed: "2 King",
    price: "$$$",
    image: viennahotel5,
  },
  {
    id: 5,
    name: "Four Seasons Hotel",
    city: "Milano",
    rating: 8.3,
    ratingText: "Very Good",
    reviews: 2700,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: milanohotel4,
  },
  {
    id: 5,
    name: "Sheraton Hotel",
    city: "Paris",
    rating: 8.0,
    ratingText: "Good",
    reviews: 828,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: parishotel4,
  },
  {
    id: 5,
    name: "Emerald Hotel",
    city: "Athens",
    rating: 7.6,
    ratingText: "Good",
    reviews: 1210,
    stars: 5,
    guests: 2,
    bedroom: 1,
    bath: 1,
    bed: "1 King",
    price: "$$$",
    image: athenshotel4,
  },
  {
    id: 5,
    name: "RN Hotel",
    city: "Berlin",
    rating: 5.6,
    ratingText: "Bad",
    reviews: 600,
    stars: 5,
    guests: 4,
    bedroom: 2,
    bath: 1,
    bed: "2 Queen",
    price: "$",
    image: berlinhotel2,
  },


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
