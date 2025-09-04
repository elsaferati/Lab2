import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import FlightDeals from '../pages/FlightDeals';
import TravelPerks from '../pages/TravelPerks';
import NewsletterSignup from '../pages/NewsletterSignup';
import WizzBenefits from '../pages/WizzBenefits';

export default function FlightBooking() {
  const [tripType, setTripType] = useState("return");
  const [selectedTab, setSelectedTab] = useState("flights");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [offers, setOffers] = useState([]); // state for fetched offers

  const navigate = useNavigate();

  // Fetch offers when flight search fields change
  useEffect(() => {
    if (!origin || !destination || !departureDate) return; // avoid fetching with empty fields

    const fetchOffers = async () => {
      try {
        const response = await fetch(
          `http://localhost:8008/travelagency/backend/api/offers.php?origin=${origin}&destination=${destination}&departureDate=${departureDate}&returnDate=${tripType === "return" ? returnDate : ""}`
        );
        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    fetchOffers();
  }, [origin, destination, departureDate, returnDate, tripType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Tabs Section */}
        <div className="bg-white rounded-t-2xl px-6 pt-6 pb-2 flex gap-6 text-black font-semibold text-lg">
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "flights" ? "border-pink-600 text-pink-600" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("flights")}
          >
            ✈️ Flights
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "hotels" ? "border-blue-500 text-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("hotels")}
          >
            🏨 Hotels
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded ml-1">-5%</span>
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${
              selectedTab === "parking" ? "border-purple-500 text-purple-500" : "border-transparent"
            }`}
            onClick={() => setSelectedTab("parking")}
          >
          </div>
        </div>

        {/* Flights Search Box */}
        {selectedTab === "flights" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="trip"
                    checked={tripType === "return"}
                    onChange={() => setTripType("return")}
                  />
                  Return
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="trip"
                    checked={tripType === "one-way"}
                    onChange={() => setTripType("one-way")}
                  />
                  One way
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              >
                <option value="">Select Origin</option>
                <option value="Pristina">Pristina</option>
              </select>

              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              >
                <option value="">Select Destination</option>
                <option value="Milano">Milano</option>
                <option value="Paris">Paris</option>
                <option value="Budapest">Budapest</option>
                <option value="London">London</option>
                <option value="Vienna">Vienna</option>
                <option value="Berlin">Berlin</option>
                <option value="Athens">Athens</option>
              </select>

              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
              {tripType === "return" && (
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border border-gray-300 p-2 rounded-lg col-span-1"
                />
              )}
              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
            </div>

            <div className="mt-4 text-right">
              <button
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg"
                onClick={() => {
                  if (!origin || !destination || !departureDate || (tripType === "return" && !returnDate)) {
                    alert("Please fill in all required fields.");
                    return;
                  }

                  const queryParams = new URLSearchParams({
                    origin,
                    destination,
                    departureDate,
                    returnDate: tripType === "return" ? returnDate : "",
                    passengers,
                  });

                  navigate(`/offers?${queryParams.toString()}`);
                }}
              >
                Search
              </button>
            </div>

            {/* Display fetched offers */}
            {offers.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Available Offers:</h2>
                <ul className="space-y-2">
                  {offers.map((offer, index) => (
                    <li key={index} className="p-4 border border-gray-300 rounded-lg bg-gray-50 text-black">
                      <p><strong>Flight:</strong> {offer.flight}</p>
                      <p><strong>Price:</strong> {offer.price} €</p>
                      <p><strong>Departure:</strong> {offer.departure}</p>
                      <p><strong>Arrival:</strong> {offer.arrival}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Hotels Search Box */}
        {selectedTab === "hotels" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <input
                type="text"
                placeholder="Where are you going?"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
                defaultValue="2025-04-10"
              />
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
                defaultValue="2025-04-11"
              />
              <input
                type="number"
                min="1"
                defaultValue="1"
                placeholder="Guests"
                className="border border-gray-300 p-2 rounded-lg col-span-1"
              />
            </div>

            <div className="mt-4 text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
                Search
              </button>
            </div>
          </div>
        )}

        {/* Promo Section */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-bold leading-tight">
            MAY-MANIA: UP TO <span className="text-yellow-300">20%</span> OFF
          </h1>
          <p className="mt-4 text-lg">
            Go crazy with up to 20% off selected flights in May!
          </p>
          <button
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg"
            onClick={() => navigate('/may-mania-booking')}
          >
            Book now!
          </button>

          <p className="mt-4 text-sm text-gray-200">
            Restrictions apply, for further information read the Terms and Conditions.
          </p>
        </div>
      </div>

      {/* Extras Section */}
      <div className="bg-white">
        <FlightDeals />
        <TravelPerks setSelectedTab={setSelectedTab} />
        <NewsletterSignup />
        <WizzBenefits />
      </div>
    </div>
  );
}





