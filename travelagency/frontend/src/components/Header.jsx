import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wizz_Air_logo_2021.svg/2560px-Wizz_Air_logo_2021.svg.png" alt="Logo" className="h-6 md:h-8" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 font-semibold text-sm">
          <a href="#" className="hover:text-pink-300">HOTELS</a>
          <a href="#" className="hover:text-pink-300">WIZZ & SERVICES</a>
          <a href="#" className="hover:text-pink-300">HELP CENTRE</a>
          <a href="#" className="hover:text-pink-300">CHECK-IN & BOOKINGS</a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-sm">
          <button className="hover:text-pink-300">SIGN IN</button>
          <button className="rounded-full border border-white px-2 py-0.5 text-xs hover:bg-white hover:text-blue-900">🇬🇧</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
