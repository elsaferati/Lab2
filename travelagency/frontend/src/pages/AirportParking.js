import React, { useState } from "react";

export default function AirportParking() {
  const [location, setLocation] = useState("London Luton");
  const [dropOffDate, setDropOffDate] = useState("2025-04-18");
  const [dropOffTime, setDropOffTime] = useState("11:00");
  const [pickUpDate, setPickUpDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("11:00");

  const handleSearch = () => {
    alert(`Searching parking at ${location} from ${dropOffDate} ${dropOffTime} to ${pickUpDate} ${pickUpTime}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
    <div className="bg-white p-6 shadow-lg text-black max-w-4xl mx-auto mt-10 rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Book Parking Online</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg col-span-1"
        >
          <option>London Luton</option>
          <option>Budapest</option>
          <option>Vienna</option>
        </select>

        <input
          type="date"
          value={dropOffDate}
          onChange={(e) => setDropOffDate(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg col-span-1"
        />
        <input
          type="time"
          value={dropOffTime}
          onChange={(e) => setDropOffTime(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg col-span-1"
        />
        <input
          type="date"
          value={pickUpDate}
          onChange={(e) => setPickUpDate(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg col-span-1"
        />
        <input
          type="time"
          value={pickUpTime}
          onChange={(e) => setPickUpTime(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg col-span-1"
        />
      </div>

      <div className="mt-6 text-right">
        <button
          onClick={handleSearch}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
        <p>
          Wizz Air in association with ParkVia offers pre-booking for parking spaces.
          Book online in advance to get a guaranteed space at a great price!
          No hassle and no time wasted – your parking space is pre-booked and pre-paid,
          allowing you to relax and enjoy your journey.
        </p>
      </div>
    </div>
    </div>
  );
}

