import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import wizz from '../assets/images/wizz.avif';
import priority from '../assets/images/priority.jpg';
import club from '../assets/images/club.jpg';
import all from '../assets/images/all.webp';
import voucher from '../assets/images/giftvoucher.jpg';
import multi from '../assets/images/multi.webp';

const benefits = [
  {
    title: "WIZZ Bundle",
    description: "Save even more with our flight bundles.",
    image: wizz,
  },
  {
    title: "WIZZ Priority",
    description: "Bring an extra trolley bag onboard and enjoy the benefits of priority boarding and check-in.",
    image: priority,
  },
  {
    title: "WIZZ Discount Club",
    description: "Join the Club to save on booking and baggage. Special offers await you!",
    image: club,
  },
  {
    title: "WIZZ All you can fly",
    description: "One pass, unlimited adventures.",
    image: all,
  },
  {
    title: "WIZZ Multipass",
    description: "Fly more while saving money with a monthly subscription!",
    image: multi,
  },
  {
    title: "Gift voucher",
    description: "Surprise your loved ones with the gift of travel!",
    image: voucher,
  },
];

export default function WizzBenefits() {
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
    <div className="bg-white px-6 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900">Travel smart with WIZZ benefits</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-2"
      >
        {benefits.map((benefit, index) => {
          const card = (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200"
            >
              <img src={benefit.image} alt={benefit.title} className="h-44 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{benefit.description}</p>
              </div>
            </div>
          );

          if (benefit.title === "WIZZ Priority") {
            return (
              <Link to="/priorities" key={index} className="block">
                {card}
              </Link>
            );
          }else if (benefit.title === "WIZZ Bundle") {
            return (
              <Link to="/bundles" key={index} className="block">
                {card}
              </Link>
            );
          }

          return <div key={index}>{card}</div>;
        })}
      </div>
    </div>
  );
}

