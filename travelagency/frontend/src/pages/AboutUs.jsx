import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white text-gray-800 py-12 px-6 max-w-5xl mx-auto">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-pink-600 mb-8 text-center">About Us</h1>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">✈️ Our Mission</h2>
        <p className="text-lg">
          At <strong>Your Airline Company</strong>, our mission is to revolutionize the way people travel by providing
          seamless, secure, and joyful experiences. We believe travel should be more than just getting from one place to another —
          it should be a part of the adventure.
        </p>
      </section>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">🌍 Our Vision</h2>
        <p className="text-lg">
          We envision a future where air travel is smart, affordable, and accessible to everyone. From smart check-ins to exclusive member services, we aim to lead the industry with technology and care.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">💜 Our Values</h2>
        <ul className="list-disc pl-6 text-lg space-y-2">
          <li><strong>Customer First:</strong> We are committed to delivering top-notch service and listening to your needs.</li>
          <li><strong>Innovation:</strong> We continuously evolve our tech and services to stay ahead of modern travel demands.</li>
          <li><strong>Transparency:</strong> No hidden fees, no surprises — just clear, honest travel experiences.</li>
          <li><strong>Sustainability:</strong> We are working toward greener skies by adopting eco-friendly practices.</li>
        </ul>
      </section>

      {/* What Makes Us Different Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">🚀 What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <div className="bg-white border-l-4 border-pink-500 p-4 shadow-sm rounded">
            <h4 className="font-bold">All-in-One Travel Platform</h4>
            <p>Book, check-in, manage baggage, and explore deals — all from a single app.</p>
          </div>
          <div className="bg-white border-l-4 border-pink-500 p-4 shadow-sm rounded">
            <h4 className="font-bold">Customer-Centric Approach</h4>
            <p>24/7 support, user-friendly interfaces, and services that are made for travelers, by travelers.</p>
          </div>
          <div className="bg-white border-l-4 border-pink-500 p-4 shadow-sm rounded">
            <h4 className="font-bold">Flexible Bookings</h4>
            <p>We understand plans change — so we offer fair, flexible options for cancellations and changes.</p>
          </div>
          <div className="bg-white border-l-4 border-pink-500 p-4 shadow-sm rounded">
            <h4 className="font-bold">Exclusive Offers</h4>
            <p>Enjoy discounts, loyalty rewards, and bundles that save you time and money.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-purple-700 mb-4">🤝 Meet the Team</h2>
        <p className="text-lg mb-4">
          Our passionate team is made up of experienced professionals from aviation, technology, and customer service backgrounds. We work day and night to make sure your journey is safe, smooth, and memorable.
        </p>
        <p className="text-lg">
          We’re not just building an airline — we’re building a community of happy travelers.
        </p>
      </section>

      {/* Join Us CTA */}
      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">Ready to Explore with Us?</h2>
        <p className="text-lg mb-6">Whether you're traveling for business, adventure, or family — we're here to make it great.</p>
        <a href="/services" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
          Explore Our Services
        </a>
      </section>

      {/* Footer Text */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>© 2025 Your Airline Company. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default AboutUs;
