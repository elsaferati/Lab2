import React from 'react';

<<<<<<< Updated upstream


const hotels = [

{ city: 'Paris, France', image: '/images/paris.jpg' },

{ city: 'Budapest, Hungary', image: '/images/budapest.jpg' },

{ city: 'New York, USA', image: '/images/newyork.jpg' },

{ city: 'Rome, Italy', image: '/images/rome.jpg' },

{ city: 'Berlin, Germany', image: '/images/berlin.jpg' },

{ city: 'Stockholm, Sweden', image: '/images/stockholm.jpg' },

];



const Hotels = () => {

return (

<div className="p-6 bg-slate-100 min-h-screen">

<h1 className="text-4xl font-bold text-center mb-8">Explore Our Hotels</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

{hotels.map((hotel, index) => (

<div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">

<img src={hotel.image} alt={hotel.city} className="w-full h-56 object-cover" />

<div className="p-4 text-center">

<h2 className="font-semibold text-lg mb-2">{hotel.city}</h2>

<button className="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-600 transition">

Book

</button>

</div>

</div>

))}

</div>

</div>

);

};



export default Hotels;
=======
const hotels = [
  { city: 'Paris, France', image: '/images/paris.jpg' },
  { city: 'Budapest, Hungary', image: '/images/budapest.jpg' },
  { city: 'New York, USA', image: '/images/newyork.jpg' },
  { city: 'Rome, Italy', image: '/images/rome.jpg' },
  { city: 'Berlin, Germany', image: '/images/berlin.jpg' },
  { city: 'Stockholm, Sweden', image: '/images/stockholm.jpg' },
];

const Hotels = () => {
  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Our Hotels</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={hotel.image} alt={hotel.city} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h2 className="font-semibold text-lg mb-2">{hotel.city}</h2>
              <button className="bg-sky-400 text-white px-4 py-2 rounded hover:bg-sky-600 transition">
                Book 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
>>>>>>> Stashed changes
