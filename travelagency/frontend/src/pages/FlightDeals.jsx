import React from 'react';

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
];

export default function FlightDeals() {
    return (
      <div className="px-6 py-12">
        <h2 className="text-3xl font-bold mb-1 text-blue-900">Explore direct flights from your area</h2>
        <p className="mb-6 text-lg text-gray-600">Cheap flights from <strong>Tirana</strong></p>
  
        <div className="flex gap-6 overflow-x-auto pb-2 scroll-smooth scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-gray-200">
          {deals.map((deal, index) => (
            <div key={index} className="min-w-[260px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <img src={deal.image} alt={deal.destination} className="h-40 w-full object-cover" />
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
  

