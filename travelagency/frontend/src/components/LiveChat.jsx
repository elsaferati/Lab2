import React, { useState } from "react";
import axios from "axios";

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);  // To toggle chat window open/close
  const [isMinimized, setIsMinimized] = useState(false); // To minimize/restore chat window

  // Add API key for authentication
  const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual API key

  // Function to fetch flight deals
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

  // Function to fetch hotel deals
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

    // Add user input to message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    // Simulate bot response
    let botResponse = "";
    if (input.toLowerCase().includes("flight")) {
      botResponse = await fetchFlightDeals();
    } else if (input.toLowerCase().includes("hotel")) {
      botResponse = await fetchHotelDeals();
    } else {
      botResponse = "Sorry, I didn't understand that.";
    }

    // Add bot response to message list
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: "bot" },
    ]);

    setInput("");  // Clear input field
  };

  // Toggle chat window open/close
  const toggleChat = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Toggle chat window minimize/restore
  const toggleMinimize = () => {
    setIsMinimized((prevState) => !prevState);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed bottom-5 right-5 w-80 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white rounded-t-lg">
            <span>Live Chat</span>
            <div className="flex space-x-2">
              <button 
                onClick={toggleMinimize} 
                className="text-white text-xl hover:bg-blue-700 rounded-full p-1">
                {isMinimized ? "🔽" : "🔼"}
              </button>
              <button 
                onClick={toggleChat} 
                className="text-white text-xl hover:bg-blue-700 rounded-full p-1">
                ✖
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-3 max-h-60 overflow-y-auto">
              <div className="space-y-2">
                {messages.map((msg, index) => (
                  <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
                    <div 
                      className={`inline-block p-2 rounded-lg max-w-xs ${
                        msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                      }`}>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleUserInput} className="flex p-3 bg-gray-100 rounded-b-lg">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-l-lg border border-gray-300"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-lg ml-2"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
