import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router

const Allyoucanfly = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">All You Can Fly</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Travel unlimited for a fixed fee. Join our membership and unlock freedom in the skies.
        </p>
        <Link to="/membership">
  <button className="mt-8 bg-white text-sky-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
    Become a Member
  </button>
</Link>

      </section>

      {/* Membership Benefits */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">Why Join?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            ["Unlimited Flights", "Fly as much as you want within our partner routes."],
            ["Priority Boarding", "Get on board before everyone else, every time."],
            ["Flexible Booking", "Reschedule without penalties."],
            ["Exclusive Deals", "Get early access to promotions and secret offers."],
            ["Extra Baggage", "Enjoy additional luggage allowance."],
            ["Dedicated Support", "24/7 VIP customer assistance."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-8">Choose Your Plan</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Monthly",
              price: "$49",
              period: "per month",
              features: ["Unlimited Flights", "Basic Support", "One free reschedule/month"],
            },
            {
              title: "Annual",
              price: "$499",
              period: "per year",
              features: ["Unlimited Flights", "Priority Support", "Unlimited reschedules", "1 Free Upgrade"],
              highlight: true,
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`w-full md:w-1/2 p-6 border rounded-lg ${plan.highlight ? "border-sky-500 bg-blue-50 shadow-lg" : "border-gray-200"}`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-extrabold text-sky-600">{plan.price}</p>
              <p className="text-gray-500 mb-6">{plan.period}</p>
              <ul className="mb-6 text-gray-700 space-y-2">
                {plan.features.map((feat, i) => (
                  <li key={i}>✓ {feat}</li>
                ))}
              </ul>
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Membership vs. Standard</h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="p-4 text-left">Features</th>
                <th className="p-4 text-center">Standard</th>
                <th className="p-4 text-center">All You Can Fly</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                ["Unlimited Flights", "✗", "✓"],
                ["Priority Boarding", "✗", "✓"],
                ["Free Rescheduling", "✗", "✓"],
                ["Exclusive Offers", "Limited", "✓"],
                ["Extra Baggage", "$30+", "Included"],
              ].map(([feature, std, mem], i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{feature}</td>
                  <td className="p-4 text-center">{std}</td>
                  <td className="p-4 text-center">{mem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Can I cancel my membership anytime?",
              a: "Yes, you can cancel your monthly membership at any time. Annual memberships are non-refundable after 14 days.",
            },
            {
              q: "Are all flights included?",
              a: "Most short- and mid-haul flights within our partner network are covered under the plan.",
            },
            {
              q: "Can I share the membership?",
              a: "No, memberships are personal and tied to your travel ID.",
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-sky-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Fly Freely?</h2>
        <p className="text-lg mb-6">Get your wings today and travel as much as your heart desires.</p>
        <Link to="/membership">
  <button className="bg-white text-sky-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
    Join Now
  </button>
</Link>

      </section>
    </div>
  );
};

export default Allyoucanfly;
