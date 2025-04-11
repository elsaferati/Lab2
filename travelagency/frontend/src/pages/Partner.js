import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Bus, PhoneCall } from "lucide-react";


const discountsData = [
  {
    title: "WIZZ Discount Club",
    content: [
      { item: "Membership fee", price: "€39.99", savings: "Save up to €10/trip" },
      { item: "Flight discount", price: "Up to €10", savings: "On each flight" },
      { item: "Baggage discount", price: "Up to €5", savings: "On checked baggage" },
    ],
  },
  {
    title: "Family WIZZ Discount Club",
    content: [
      { item: "Membership fee", price: "€69.99", savings: "Covers up to 6 people" },
      { item: "Flight discount", price: "Up to €10", savings: "Per passenger" },
      { item: "Exclusive offers", price: "Included", savings: "Access to special deals" },
    ],
  },
  {
    title: "Partner Discounts",
    content: [
      { item: "Car rental", price: "10% off", savings: "With WIZZ partners" },
      { item: "Airport transfer", price: "15% off", savings: "Pre-booked rides" },
      { item: "Hotels", price: "Up to 20% off", savings: "On selected hotels" },
    ],
  },
];

const Partner = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="flex flex-col items-center text-center max-w-sm">
      <Bus className="w-12 h-12 text-indigo-700 mb-2" />
      <p className="text-sm text-gray-700">
        <strong>Important:</strong> Some services are not provided by Wizz Air
      </p>
    </div>
    <div className="flex flex-col items-center text-center max-w-sm">
      <PhoneCall className="w-12 h-12 text-indigo-700 mb-2" />
      <p className="text-sm text-gray-700">
        If you want to change or cancel a partner service, you need to contact the service provider directly.
      </p>
    </div>
  
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Discounts & Partner Offers</h1>
      {discountsData.map((discount, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-2xl mb-4 shadow-sm overflow-hidden"
        >
          <button
            onClick={() => toggleCard(index)}
            className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <h2 className="text-lg font-semibold">{discount.title}</h2>
            {openIndex === index ? (
              <ChevronUp className="text-indigo-600" />
            ) : (
              <ChevronDown className="text-indigo-600" />
            )}
          </button>

          {openIndex === index && (
            <div className="px-5 pb-5 bg-white">
              <table className="w-full text-left mt-4 border-t border-gray-200">
                <thead>
                  <tr className="text-sm text-gray-600">
                    <th className="py-2">Item</th>
                    <th className="py-2">Price/Benefit</th>
                    <th className="py-2">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {discount.content.map((row, i) => (
                    <tr key={i} className="text-sm border-t">
                      <td className="py-2">{row.item}</td>
                      <td className="py-2">{row.price}</td>
                      <td className="py-2 text-green-600">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Partner;
