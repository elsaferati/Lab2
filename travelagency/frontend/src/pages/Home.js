import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

// Pages/Extras
import FlightDeals from '../pages/FlightDeals';
import TravelPerks from '../pages/TravelPerks';
import NewsletterSignup from '../pages/NewsletterSignup';
import WizzBenefits from '../pages/WizzBenefits';

// Components
import FlightCard from '../components/FlightCard';

export default function FlightBooking() {
  const [tripType, setTripType] = useState("return");
  const [selectedTab, setSelectedTab] = useState("flights");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    // 1️⃣ Validate fields
    if (!origin || !destination || !departureDate || (tripType === "return" && !returnDate)) {
      alert(`Please fill in all required fields:
Origin: ${origin || "❌"}
Destination: ${destination || "❌"}
Departure Date: ${departureDate || "❌"}
Return Date: ${tripType === "return" ? (returnDate || "❌") : "N/A"}`);
      return;
    }

    setLoading(true);

    try {
      const url = `http://localhost:8008/Lab2/travelagency/backend/helpers/searchFlights.php` +
        `?origin=${encodeURIComponent(origin)}` +
        `&destination=${encodeURIComponent(destination)}` +
        `&departureDate=${encodeURIComponent(departureDate)}` +
        (tripType === "return" ? `&returnDate=${encodeURIComponent(returnDate)}` : "");

      console.log("Fetching URL:", url);

      const response = await fetch(url);

      if (!response.ok) {
        const text = await response.text();
        console.error("Backend fetch failed:", text);
        alert("Backend request failed. Check console for details.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.error) {
        alert(`Backend error: ${data.error}`);
        setOffers([]);
        setLoading(false);
        return;
      }

      const mappedOffers = (data.flights || data.results || []).map((f, index) => ({
        id: f.id || index,
        origin: f.origin || "N/A",
        destination: f.destination || "N/A",
        departure: f.departure || f.departureDate || new Date().toISOString(),
        arrival: f.arrival || f.arrivalDate || new Date().toISOString(),
        duration: f.duration || "N/A",
        airline: f.airline || "Unknown",
        flightNumber: f.flightNumber || "—",
        price: f.price || "N/A",
      }));

      setOffers(mappedOffers);
      setLoading(false);

    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch offers. Check console for details.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto py-10 px-4">

        {/* Tabs */}
        <div className="bg-white rounded-t-2xl px-6 pt-6 pb-2 flex gap-6 text-black font-semibold text-lg">
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${selectedTab === "flights" ? "border-pink-600 text-pink-600" : "border-transparent"}`}
            onClick={() => setSelectedTab("flights")}
          >
            ✈️ Flights
          </div>
          <div
            className={`cursor-pointer flex items-center gap-2 border-b-4 pb-2 ${selectedTab === "hotels" ? "border-blue-500 text-blue-500" : "border-transparent"}`}
            onClick={() => setSelectedTab("hotels")}
          >
            🏨 Hotels
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded ml-1">-5%</span>
          </div>
        </div>

        {/* Flights Search */}
        {selectedTab === "flights" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-4">

            {/* Trip type */}
            <div className="flex gap-4 items-center">
              <label>
                <input type="radio" name="trip" checked={tripType === "return"} onChange={() => setTripType("return")} />
                Return
              </label>
              <label>
                <input type="radio" name="trip" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} />
                One way
              </label>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
              <select value={origin} onChange={(e) => setOrigin(e.target.value)} className="border p-2 rounded-lg">
                <option value="">Select Origin</option>
                <option value="Pristina">Pristina</option>
              </select>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className="border p-2 rounded-lg">
                <option value="">Select Destination</option>
                <option value="Milano">Milano</option>
                <option value="Paris">Paris</option>
                <option value="Budapest">Budapest</option>
                <option value="London">London</option>
                <option value="Vienna">Vienna</option>
                <option value="Berlin">Berlin</option>
                <option value="Athens">Athens</option>
              </select>
              <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="border p-2 rounded-lg" />
              {tripType === "return" && (
                <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="border p-2 rounded-lg" />
              )}
              <input type="number" min="1" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="border p-2 rounded-lg" />
            </div>

            {/* Search button */}
            <div className="mt-4 text-right">
              <button onClick={handleSearch} className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg text-white font-semibold">
                {loading ? "Searching..." : "Search"}
              </button>
            </div>

            {/* Display offers */}
            <div className="mt-6 text-black">
              <h2 className="text-2xl font-bold mb-6">Available Flights</h2>
              {loading ? (
                <p className="text-center text-gray-700 py-8">Loading flights...</p>
              ) : offers.length > 0 ? (
                <div className="space-y-4">
                  {offers.map((offer) => (
                    <FlightCard key={offer.id} offer={offer} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-700 text-lg text-center py-8">
                  No flights found for the selected search. Try different dates or destinations.
                </p>
              )}
            </div>

          </div>
        )}

        {/* Hotels Search Box */}
        {selectedTab === "hotels" && (
          <div className="bg-white rounded-b-2xl p-6 shadow-lg text-black mt-4">
            <p>Hotel search box here...</p>
          </div>
        )}

        {/* Promo Section */}
        <div className="mt-10 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight">
            MAY-MANIA: UP TO <span className="text-yellow-300">20%</span> OFF
          </h1>
          <p className="mt-4 text-lg">Go crazy with up to 20% off selected flights in May!</p>
          <button onClick={() => navigate('/may-mania-booking')} className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
            Book now!
          </button>
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


