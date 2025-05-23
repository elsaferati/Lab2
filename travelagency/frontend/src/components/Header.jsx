import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const Header = ({ onSignUpClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wizz_Air_logo_2021.svg/2560px-Wizz_Air_logo_2021.svg.png"
            alt="Logo"
            className="h-6 md:h-8"
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          className="text-white md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav className={`md:flex space-x-6 font-semibold text-sm ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/hotels" className="hover:text-pink-300">HOTELS</Link>
          
          {/* Help Centre Link */}
          <Link to="/help-center" className="hover:text-pink-300">HELP CENTER</Link>

          {/* Check-in & Booking Link */}
          <Link
            to="/check-in-booking"  // Ensure this route exists in your app
            className="hover:text-pink-300"
          >
            CHECK-IN & BOOKING
          </Link>

          {/* Services Link */}
          <Link to="/services" className="hover:text-pink-300">SERVICES</Link>  {/* <-- Added Services Link */}

          {/* Back to Home Button */}
          <button
            onClick={() => navigate('/')}  // This navigates to the homepage
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-lg"
          >
            ⬅ Back to Home
          </button>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-sm">
          <button
            onClick={onSignUpClick}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 rounded-lg"
          >
            SIGN UP
          </button>

          <button className="rounded-full border border-white px-2 py-0.5 text-xs hover:bg-white hover:text-blue-900">
            🇬🇧
          </button>
        </div>
      </div>
    </header>
  );
};

// Prop validation for onSignUpClick
Header.propTypes = {
  onSignUpClick: PropTypes.func.isRequired,  // Ensures onSignUpClick is passed and is a function
};

export default Header;
