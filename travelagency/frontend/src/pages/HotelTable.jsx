import React, { useEffect, useState } from "react";

const HotelTable = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await fetch(
          "http://localhost:8080/Lab/Lab2/travelagency/backend/api/hotels.php"
        );
        const data = await res.json();
        setHotels(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">City</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Rating</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Reviews</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Guests</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Bedroom</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Bath</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Bed</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{hotel.id}</td>
              <td className="px-4 py-2">{hotel.name}</td>
              <td className="px-4 py-2">{hotel.city}</td>
              <td className="px-4 py-2">{hotel.rating}</td>
              <td className="px-4 py-2">{hotel.reviews}</td>
              <td className="px-4 py-2">{hotel.guests}</td>
              <td className="px-4 py-2">{hotel.bedroom}</td>
              <td className="px-4 py-2">{hotel.bath}</td>
              <td className="px-4 py-2">{hotel.bed}</td>
              <td className="px-4 py-2">{hotel.price}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelTable;
