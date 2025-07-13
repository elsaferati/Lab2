// src/pages/FlightOffers.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FlightOffers() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');
  const departureDate = searchParams.get('departureDate');
  const returnDate = searchParams.get('returnDate');
  const passengers = searchParams.get('passengers');

  const offers = [
    {
      city: 'Milano',
      price: '€49.99',
      image: '/images/milano.jpg',
    },
    {
      city: 'Paris',
      price: '€59.99',
      image: '/images/paris.jpg',
    },
    {
      city: 'Budapest',
      price: '€39.99',
      image: '/images/budapest.jpg',
    },
    {
      city: 'Vienna',
      price: '€29.99',
      image: '/images/vienna.jpg',
    },
    {
      city: 'Berlin',
      price: '€44.99',
      image: '/images/berlin.jpg',
    },
    {
      city: 'Athens',
      price: '€54.99',
      image: '/images/athens.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h1 className="text-3xl font-bold mb-2">Flight Offers</h1>
      <p className="text-lg mb-6">
        🛫 <strong>{origin}</strong> → 🛬 <strong>{destination}</strong><br />
        📅 Departure: <strong>{departureDate}</strong><br />
        {returnDate && <>🔁 Return: <strong>{returnDate}</strong><br /></>}
        👤 Passengers: <strong>{passengers}</strong>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.city} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
            <img src={offer.image} alt={offer.city} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{offer.city}</h2>
              <p className="text-pink-600 font-semibold">{offer.price}</p>
              <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded w-full">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

