import React from "react";
import PropTypes from "prop-types";

export default function FlightCard({ offer }) {
  return (
    <div className="border rounded-2xl shadow-md bg-white p-4 flex justify-between items-center">
      {/* Left side: flight details */}
      <div>
        <p className="text-sm text-gray-500">
          {offer.origin} → {offer.destination}
        </p>
        <h2 className="text-xl font-semibold">
          {new Date(offer.departure_date).toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold">
            {offer.departure_time || "10:45"}
          </span>
          <span className="text-gray-500">—</span>
          <span className="text-lg font-bold">
            {offer.arrival_time || "12:30"}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{offer.duration || "1h 45m"}</p>
      </div>

      {/* Right side: price + select */}
      <div className="text-right">
        <p className="text-sm text-gray-500">Regular Price</p>
        <p className="text-2xl font-bold text-pink-600">{offer.price} €</p>
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
    id: PropTypes.number,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    return_date: PropTypes.string,
    departure_time: PropTypes.string,
    arrival_time: PropTypes.string,
    duration: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

