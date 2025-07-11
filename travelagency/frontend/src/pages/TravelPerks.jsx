import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import bookingImg from '../assets/images/booking.jpg';
import carImg from '../assets/images/car.jpg';
import parkingImg from '../assets/images/airportparking.jpg';
import securityImg from '../assets/images/security.jpg';
import loungeImg from '../assets/images/lounge.jpg';
import insuranceImg from '../assets/images/insurance.jpg';

const perks = [
  {
    title: "Booking.com",
    description: "Book your home away from home and get 5% off your hotel booking back as WIZZ credit.",
    image: bookingImg,
  },
  {
    title: "Rent a car",
    description: "Get back 5% in WIZZ credits when you rent a car and save on your future trips!",
    image: carImg,
  },
  {
    title: "Airport parking",
    description: "Reserve hassle-free parking and save up to 60%.",
    image: parkingImg,
  },
  {
    title: "Security Fast Track",
    description: "Skip the long lines and pass through security quickly, even during peak hours.",
    image: securityImg,
  },
  {
    title: "Exclusive Lounge",
    description: "Relax and enjoy complimentary food, drink, WiFi access and other premium services while at the airport.",
    image: loungeImg,
  },
  {
    title: "Insurance",
    description: "Add insurance to your trip and be prepared for the unexpected.",
    image: insuranceImg,
  },
];

export default function TravelPerks() {
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
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-blue-900">
            Fly & beyond – unlock extra travel perks!
          </h2>
          <p className="text-lg text-gray-600">
            Boost your travel experience with these extras
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="bg-[#e6007e] text-white rounded-full p-2 hover:bg-[#cc0070] shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-[#e6007e] text-white rounded-full p-2 hover:bg-[#cc0070] shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-2 scrollbar-none"
      >
 {perks.map((perk, index) => {
          const isAirportParking = perk.title === "Airport parking";
          const isSecurityFastTrack = perk.title === "Security Fast Track";    
          const isAirportLounge = perk.title === "Exclusive Lounge"; 
          const isTravelInsurance = perk.title === "Insurance";  
          const isBooking = perk.title === "Booking.com";    

          const cardContent = (
            <div className="min-w-[280px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition">
              <img
                src={perk.image}
                alt={perk.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700">{perk.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{perk.description}</p>
              </div>
            </div>
          );

          if (isAirportParking) {
            return (
              <Link to="/airport-parking" key={index} className="block min-w-[280px]">
                {cardContent}
              </Link>
            );
          } else if (isSecurityFastTrack) {
            return (
              <Link to="/fast-track" key={index} className="block min-w-[280px]">
                {cardContent}
              </Link>
            );
          } else if (isAirportLounge) {
            return (
              <Link to="/lounge" key={index} className="block min-w-[280px]">
                {cardContent}
              </Link>
            );
          }else if (isTravelInsurance) {
            return (
              <Link to="/travel-insurance" key={index} className="block min-w-[280px]">
                {cardContent}
              </Link>
            );
          }else if (isBooking) {
            return (
              <Link to="/hotels" key={index} className="block min-w-[280px]">
                {cardContent}
              </Link>
            );
          }else {
            return <div key={index}>{cardContent}</div>;
          }
          
        })}
      </div>
    </div>
  );
}

     



