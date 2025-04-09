import {
    FaYoutube,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-gray-100 text-sm text-gray-800 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300">
  
          {/* Column 1 */}
          <div>
            <h3 className="text-blue-900 font-bold mb-3">Wizz Services</h3>
            <ul className="space-y-1 text-pink-600">
              <li>WIZZ Discount Club</li>
              <li>WIZZ Flex</li>
              <li>WIZZ Priority</li>
              <li>Hotels</li>
              <li>Car rentals</li>
              <li>Airport transfer</li>
            </ul>
          </div>
  
          {/* Column 2 */}
          <div>
            <h3 className="text-blue-900 font-bold mb-3">Customer service</h3>
            <ul className="space-y-1 text-pink-600">
              <li>Booking with Wizz Air</li>
              <li>Baggage</li>
              <li>Payments</li>
              <li>Special Assistance</li>
              <li>Online check-in</li>
              <li>General Conditions of Carriage</li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h3 className="text-blue-900 font-bold mb-3">Flights & destinations</h3>
            <ul className="space-y-1 text-pink-600">
              <li>Current Flight Status</li>
              <li>Map</li>
              <li>Destinations</li>
              <li>Timetable</li>
              <li>Cancellation information</li>
            </ul>
          </div>
  
          {/* Column 4 */}
          <div>
            <h3 className="text-blue-900 font-bold mb-3">About Wizz Air</h3>
            <ul className="space-y-1 text-pink-600">
              <li>Company information</li>
              <li>News</li>
              <li>Careers</li>
              <li>Press Office</li>
              <li>For travel agents & partners</li>
            </ul>
          </div>
        </div>
  
        {/* Social section */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
          <span className="text-gray-700 mb-3 md:mb-0 font-semibold">Follow us</span>
          <div className="flex gap-4 text-pink-600 text-xl">
            <FaYoutube className="hover:text-pink-800 cursor-pointer" />
            <FaFacebookF className="hover:text-pink-800 cursor-pointer" />
            <FaTwitter className="hover:text-pink-800 cursor-pointer" />
            <FaInstagram className="hover:text-pink-800 cursor-pointer" />
            <FaLinkedinIn className="hover:text-pink-800 cursor-pointer" />
          </div>
        </div>
      </footer>
    );
  }
  