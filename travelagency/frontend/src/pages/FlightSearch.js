import React, { useState } from "react";
import PropTypes from 'prop-types';

export default function FlightSearch({ setDestination, setDepartureDate, setReturnDate, setPassengers }) {
  const [flightOffers, setFlightOffers] = useState([]);

  const destinations = ["Milano", "Paris", "Budapest", "London", "Vienna", "Berlin", "Athens"];
  
  const handleSearch = () => {
    fetchFlightOffers();
  };

  const fetchFlightOffers = () => {
    // Ideally, make an API call here based on the user inputs
    const mockData = {
      Milano: [{ price: "€49.99", departure: setDepartureDate, return: setReturnDate, passengers: setPassengers }],
      Paris: [{ price: "€59.99", departure: setDepartureDate, return: setReturnDate, passengers: setPassengers }],
    };

    setFlightOffers(mockData[setDestination] || []);
  };

  return (
    <div>
      <div>
        <select onChange={(e) => setDestination(e.target.value)} defaultValue="">
          <option value="">Select Destination</option>
          {destinations.map((dest) => (
            <option key={dest} value={dest}>
              {dest}
            </option>
          ))}
        </select>
        <input
          type="date"
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <input
          type="date"
          onChange={(e) => setReturnDate(e.target.value)}
        />
        <input
          type="number"
          min="1"
          onChange={(e) => setPassengers(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {flightOffers.length === 0 ? (
          <p>No flights found. Please try with different dates or destinations.</p>
        ) : (
          flightOffers.map((offer, index) => (
            <div key={index}>
              <p>Price: {offer.price}</p>
              <p>Departure Date: {offer.departure}</p>
              <p>Return Date: {offer.return}</p>
              <p>Passengers: {offer.passengers}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// Add prop validation
FlightSearch.propTypes = {
  setDestination: PropTypes.func.isRequired,
  setDepartureDate: PropTypes.func.isRequired,
  setReturnDate: PropTypes.func.isRequired,
  setPassengers: PropTypes.func.isRequired,
};


