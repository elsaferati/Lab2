import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import milanoImg from "../assets/images/milano.jpg";
import parisImg from "../assets/images/paris.webp";
import budapestImg from "../assets/images/budapest.webp";
import berlinImg from "../assets/images/berlin.jpg";
import viennaImg from "../assets/images/vienna.jpeg";
import hotelImg from "../assets/images/hotels.webp";
import apartmentImg from "../assets/images/apartments.jpg";
import resortImg from "../assets/images/resorts.jpg";
import villaImg from "../assets/images/villas.jpg"; 
import dealBudapestImg from "../assets/images/budapestaprt.jpg";
import dealLondonImg from "../assets/images/londonhotel.webp";
import dealAthensImg from "../assets/images/athenshotel.jpg";
import dealViennaImg from "../assets/images/viennahotel.jpg";
import dealMilanoImg from "../assets/images/milanoaprt.avif";
import dealBerlinImg from "../assets/images/berlinhotel.jpg";
import hotel1Img from '../assets/images/hotel1Img.jpg';
import apartment1Img from '../assets/images/apartment1Img.avif';
import villa1Img from '../assets/images/villa1Img.webp';
import hotel2Img from '../assets/images/hotel2Img.jpg';
import apartment2Img from '../assets/images/apartment2Img.jpg';
import villa2Img from '../assets/images/villa2Img.jpg';

export default function Hotels() {
  const [location, setLocation] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearch = () => {
    alert(
      `Search: ${location}, Adults: ${adults}, Children: ${children}, Rooms: ${rooms}`
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto font-sans">
      {/* 🔍 Search Box */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-10 space-y-4 border-2 border-yellow-400 w-[750px] mx-auto">

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Where are you going?</option>
          <option value="paris">Paris</option>
          <option value="milano">Milano</option>
          <option value="london">London</option>
          <option value="vienna">Vienna</option>
          <option value="berlin">Berlin</option>
          <option value="athens">Athens</option>
          <option value="budapest">Budapest</option>
        </select>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="date"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Adults</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Children</option>
            {[...Array(6)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>

          <select
            value={rooms}
            onChange={(e) => setRooms(Number(e.target.value))}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Rooms</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

     {/* 🏠 Property Types */}
<section className="mb-10">
  <h2 className="text-2xl font-bold mb-4">Browse by property type</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { name: "Hotels", img: hotelImg },
      { name: "Apartments", img: apartmentImg },
      { name: "Resorts", img: resortImg },
      { name: "Villas", img: villaImg },
    ].map((type) => (
      <div
        key={type.name}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
      >
        <img
          src={type.img}
          alt={type.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-2 text-center font-medium">{type.name}</div>
      </div>
    ))}
  </div>
</section>

      {/* 📍 Trending Destinations */}
      <section className="mb-10">
  <h2 className="text-2xl font-bold">Trending destinations</h2>
  <p className="text-gray-500 mb-4">
    Most popular choices for travellers from Kosovo
  </p>
  <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8">
    {[
     { name: "Milano", img: milanoImg },
     { name: "Paris", img: parisImg },
     { name: "Budapest", img: budapestImg },
     { name: "Berlin", img: berlinImg },
     { name: "Vienna", img: viennaImg },
    ].map((city) => (
      <div
        key={city.name}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
      >
        <img
          src={city.img}
          alt={city.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-2 text-center font-medium">{city.name}</div>
      </div>
    ))}
  </div>
</section>


      {/* 💸 Deals */}
      <section className="mb-10">
  <h2 className="text-2xl font-bold mb-4 ">Deals for the weekend</h2>
  <Slider {...sliderSettings}className="h-[380px] w-[70%] mx-auto">
    {[
      {
        name: " Apartment in Budapest",
        price: "€289 (2 nights)",
        img: dealBudapestImg,
      },
      {
        name: "Hotel in London",
        price: "€1068 (2 nights)",
        img: dealLondonImg,
      },
      {
        name: "Hotel in Athens",
        price: "€466 (2 nights)",
        img: dealAthensImg,
      },
      {
        name: "Luxury Stay in Vienna",
        price: "€350 (3 nights)",
        img: dealViennaImg,
      },
      {
        name: "Modern Apartment in Milan",
        price: "€210 (2 nights)",
        img: dealMilanoImg,
      },
      {
        name: "Hotel in Berlin",
        price: "€180 (2 nights)",
        img: dealBerlinImg,
      },
    ].map((deal, index) => (
      <div key={index} className="px-2"> 
        <div className="bg-white rounded-xl overflow-hidden shadow-md h-[350px]">
          <img
            src={deal.img}
            alt={deal.name}
            className="w-full h-[250px] object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-lg">{deal.name}</h3>
            <p className="text-blue-600 font-medium">{deal.price}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</section>
      {/* 🏡 Unique Properties */}
      <section className="py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">
        Discover Our Featured Properties
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {/* Hotel 1 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={hotel1Img}
            alt="Luxury Beachfront Hotel"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Luxury Beachfront Hotel</h3>
            <p className="text-gray-600">Experience the best of beachfront luxury with exceptional service and stunning ocean views.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>

        {/* Apartment 1 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={apartment1Img}
            alt="Downtown Modern Apartment"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Downtown Modern Apartment</h3>
            <p className="text-gray-600">Stay in the heart of the city with easy access to restaurants, shops, and local attractions.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>

        {/* Villa 1 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={villa1Img}
            alt="Exclusive Private Villa"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Exclusive Private Villa</h3>
            <p className="text-gray-600">Indulge in the luxury of a private villa with breathtaking mountain views and a personal chef.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>

        {/* Hotel 2 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={hotel2Img}
            alt="Grand City Hotel"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Grand City Hotel</h3>
            <p className="text-gray-600">A sophisticated hotel offering the best city views, dining, and amenities.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>

        {/* Apartment 2 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={apartment2Img}
            alt="Cozy City Center Apartment"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Cozy City Center Apartment</h3>
            <p className="text-gray-600">A cozy apartment with all the essentials for a comfortable stay in the city.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>

        {/* Villa 2 */}
        <div className="max-w-sm bg-white shadow-xl rounded-lg overflow-hidden">
          <img
            src={villa2Img}
            alt="Modern Mountain Villa"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Modern Mountain Villa</h3>
            <p className="text-gray-600">A beautiful villa with panoramic mountain views, perfect for a luxurious getaway.</p>
            <button className="mt-4 text-blue-600 hover:underline">View Details</button>
          </div>
        </div>
      </div>
    </section>  

    </div>
  );
}
