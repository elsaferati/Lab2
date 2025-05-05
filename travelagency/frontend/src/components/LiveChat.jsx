import React, { useState } from "react";
import axios from "axios";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Add API key for authentication
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace this with your actual API key

  // Function to fetch flight deals with API key in headers
  const fetchFlightDeals = async () => {
    try {
      const response = await axios.get('http://localhost/backend/api/flights.php', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      if (response.data.error) {
        return `Error: ${response.data.error}`;
      }
      return `We found some great flight deals: ${response.data.map((flight) => flight.destination + ' ' + flight.price).join(', ')}`;
    } catch (error) {
      return 'Sorry, I could not fetch flight deals at the moment.';
    }
  };

  // Function to fetch hotel deals with API key in headers
  const fetchHotelDeals = async () => {
    try {
      const response = await axios.get('http://localhost/backend/api/hotels.php', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
      if (response.data.error) {
        return `Error: ${response.data.error}`;
      }
      return `We found some great hotel deals: ${response.data.map((hotel) => hotel.name + ' ' + hotel.price).join(', ')}`;
    } catch (error) {
      return 'Sorry, I could not fetch hotel deals at the moment.';
    }
  };

  // Function to handle user input
  const handleUserInput = async (e) => {
    e.preventDefault();

    // Add the user input to the message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    // Simulate bot response
    let botResponse = "";
    if (input.toLowerCase().includes("flight")) {
      botResponse = await fetchFlightDeals();  // Fetch flight deals when user asks for flights
    } else if (input.toLowerCase().includes("hotel")) {
      botResponse = await fetchHotelDeals();  // Fetch hotel deals when user asks for hotels
    } else {
      botResponse = "Sorry, I didn't understand that.";
    }

    // Add the bot response to the message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: "bot" },
    ]);

    setInput("");  // Clear the input field
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleUserInput} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
