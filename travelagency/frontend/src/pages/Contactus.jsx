import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
        Contact us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Self Service */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-5xl mb-4">🧑‍💼</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">SELF SERVICE</h3>
          <p className="text-gray-700 mb-4">
            We aim to meet all customer requests, but some situations are beyond
            our agents' assistance. You can find solutions below.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-pink-700 transition">
            SEE SOLUTIONS
          </button>
        </div>

        {/* Chat with Amelia */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">CHAT WITH AMELIA</h3>
          <p className="text-gray-700 mb-4">
            For quick help, talk to our virtual assistant, available 24/7 for booking,
            flight status, baggage, and WIZZ services questions.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-pink-700 transition">
            START CHAT
          </button>
        </div>

        {/* Claims and Refunds */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <div className="text-5xl mb-4">💸</div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">CLAIMS AND REFUNDS</h3>
          <p className="text-gray-700 mb-4">
            Submit a claim for flight or service issues, baggage problems, or booking troubles.
          </p>
          <button className="bg-pink-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-pink-700 transition">
            MAKE A CLAIM
          </button>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-600">
        Are you a <span className="font-semibold">claim management company, a lawyer or a law firm?</span>{" "}
        <a href="#" className="text-pink-600 font-semibold underline hover:text-pink-800">
          Submit a claim here.
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
