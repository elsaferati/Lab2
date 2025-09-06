import React from "react";
import PropTypes from "prop-types";

export default function FlightCard({ offer }) {
  // Safe date formatting
  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return isNaN(date) ? "N/A" : date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return isNaN(date) ? "N/A" : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="border rounded-2xl shadow-md bg-white p-4 flex justify-between items-center">
      {/* Left side: flight details */}
      <div>
        <p className="text-sm text-gray-500">
          {offer.origin || "N/A"} → {offer.destination || "N/A"}
        </p>
        <h2 className="text-xl font-semibold">{formatDate(offer.departure)}</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold">{formatTime(offer.departure)}</span>
          <span className="text-gray-500">—</span>
          <span className="text-lg font-bold">{formatTime(offer.arrival)}</span>
        </div>
        <p className="text-gray-600 text-sm">{offer.duration || "N/A"}</p>
        <p className="text-gray-600 text-sm">
          Airline: {offer.airline || "Unknown"} ({offer.flightNumber || "—"})
        </p>
      </div>

      {/* Right side: price + select */}
      <div className="text-right">
        <p className="text-sm text-gray-500">Price</p>
        <p className="text-2xl font-bold text-pink-600">
          {offer.price && offer.price !== "N/A" ? `${offer.price} €` : "Coming Soon"}
        </p>

        <button className="mt-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
          Select
        </button>
      </div>
    </div>
  );
}

// ✅ Prop validation
FlightCard.propTypes = {
  offer: PropTypes.shape({
    airline: PropTypes.string,
    flightNumber: PropTypes.string,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departure: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    duration: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};
