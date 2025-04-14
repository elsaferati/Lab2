import React, { useState } from "react";
import milanoImg from "../assets/images/milano.jpg";
import parisImg from "../assets/images/paris.webp";
import budapestImg from "../assets/images/budapest.webp";
import berlinImg from "../assets/images/berlin.jpg";
import viennaImg from "../assets/images/vienna.jpeg";
import hotelImg from "../assets/images/hotels.webp";
import apartmentImg from "../assets/images/apartments.jpg";
import resortImg from "../assets/images/resorts.jpg";
import villaImg from "../assets/images/villas.jpg"; 

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

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto font-sans">
      {/* 🔍 Search Box */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-10 space-y-4 border-2 border-yellow-400">
        
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
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
          className="w-full h-32 object-cover"
        />
        <div className="p-2 text-center font-medium">{city.name}</div>
      </div>
    ))}
  </div>
</section>


      {/* 💸 Deals */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Deals for the weekend</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">The Caravan</h3>
            <p className="text-blue-600 font-medium">€289 (2 nights)</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold"></h3>
            <p className="text-blue-600 font-medium">€168 (2 nights)</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">Holiday Park Olive Tree</h3>
            <p className="text-blue-600 font-medium">€166 (2 nights)</p>
          </div>
        </div>
      </section>

      {/* 🏡 Unique Properties */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          Stay at our top unique properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg text-center">
            Domki Wierszyki Shelters
          </div>
          <div className="p-4 border rounded-lg text-center">Ranczo w Dolinie</div>
          <div className="p-4 border rounded-lg text-center">
            Tiny House Dreischwesternherz
          </div>
        </div>
      </section>
    </div>
  );
}
