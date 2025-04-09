import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // uses lucide icons

const deals = [
  {
    destination: "Ancona",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tempio_del_Valadier_%28Genga%29.jpg/800px-Tempio_del_Valadier_%28Genga%29.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
  {
    destination: "Comiso",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination2.jpg",
    month: "in June",
    price: "ALL 2,980",
  },
  {
    destination: "Pisa (Tuscany)",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination3.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
  {
    destination: "Ancona",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tempio_del_Valadier_%28Genga%29.jpg/800px-Tempio_del_Valadier_%28Genga%29.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
  {
    destination: "Comiso",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination2.jpg",
    month: "in June",
    price: "ALL 2,980",
  },
  {
    destination: "Pisa (Tuscany)",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination3.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
  {
    destination: "Ancona",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tempio_del_Valadier_%28Genga%29.jpg/800px-Tempio_del_Valadier_%28Genga%29.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
  {
    destination: "Comiso",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination2.jpg",
    month: "in June",
    price: "ALL 2,980",
  },
  {
    destination: "Pisa (Tuscany)",
    image: "https://www.wizzair.com/static/assets/img/flight-search-widget/destination3.jpg",
    month: "in May",
    price: "ALL 2,980",
  },
];

export default function FlightDeals() {
    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === 'left' ? -300 : 300,
          behavior: 'smooth',
        });
      }
    };
  
    return (
      <div className="relative px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-1 text-blue-900">Explore direct flights from your area</h2>
        <p className="mb-6 text-lg text-gray-600">Cheap flights from <strong>Tirana</strong></p>
  
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-pink-100"
        >
          <ChevronLeft className="text-pink-600" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-pink-100"
        >
          <ChevronRight className="text-pink-600" />
        </button>
  
        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-2 px-2
                     scrollbar-none"
        >
          {deals.map((deal, index) => (
            <div key={index} className="min-w-[300px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img src={deal.image} alt={deal.destination} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700">{deal.destination}</h3>
                <div className="flex items-center justify-between text-sm mt-2 text-gray-600">
                  <span>📅 {deal.month}</span>
                  <span>✈️ Return</span>
                </div>
                <div className="text-pink-600 font-bold text-right mt-2">{deal.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  

