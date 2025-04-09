import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const perks = [
  {
    title: "Booking.com",
    description: "Book your home away from home and get 5% off your hotel booking back as WIZZ credit.",
    image: "/images/booking.jpg", // Replace with actual path or URL
  },
  {
    title: "Rent a car",
    description: "Get back 5% in WIZZ credits when you rent a car and save on your future trips!",
    image: "/images/rentacar.jpg",
  },
  {
    title: "Airport parking",
    description: "Reserve hassle-free parking and save up to 60%.",
    image: "/images/parking.jpg",
  },
  {
    title: "Security Fast Track",
    description: "Skip the long lines and pass through security quickly, even during peak hours.",
    image: "/images/security.jpg",
  },
  {
    title: "Exclusive Lounge",
    description: "Relax and enjoy complimentary food, drink, WiFi access and other premium services while at the airport.",
    image: "/images/lounge.jpg",
  },
  {
    title: "Insurance",
    description: "Add insurance to your trip and be prepared for the unexpected.",
    image: "/images/insurance.jpg",
  },
];

export default function TravelPerks() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -320, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="my-10 px-4 relative">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">Fly & beyond - unlock extra travel perks!</h2>

      <div className="relative">
        <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full">
          <ChevronLeft size={20} />
        </button>

        <div ref={scrollRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-8">
          {perks.map((perk, index) => (
            <div key={index} className="min-w-[300px] max-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0">
              <img src={perk.image} alt={perk.title} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-indigo-700 text-lg">{perk.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
