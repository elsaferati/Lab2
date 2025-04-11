import React, { useState } from 'react';

const discountData = [
  {
    title: "WIZZ Discount Club",
    fees: [
      { name: "WIZZ Discount Club Standard", method: "Annual", amount: "€39.99" },
      { name: "WIZZ Discount Club Standard Plus", method: "Annual", amount: "€69.99" },
      { name: "WIZZ Discount Club Premium", method: "Annual", amount: "€349.99" },
      { name: "WIZZ Discount Club Premium Plus", method: "Annual", amount: "€384.99" },
    ],
  },
  {
    title: "Flight Services",
    fees: [
      { name: "Assigned seat", method: "Per flight, per passenger", amount: "€4.00 – €60.00" },
      { name: "WIZZ Flex fee", method: "Per flight, per passenger", amount: "€5.00 – €25.00" },
    ],
  },
  {
    title: "Airport Services",
    fees: [
      { name: "Security Fast Track Budapest", method: "Per passenger", amount: "€4.00" },
      { name: "Exclusive Lounge Budapest", method: "Per passenger", amount: "€20.00" },
      { name: "Exclusive Lounge Katowice", method: "Per passenger", amount: "€20.00" },
      { name: "WIZZ Priority", method: "Per flight, per passenger", amount: "€0.00 – €60.00" },
    ],
  },
];

const Discounts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Discounts</h1>

      {discountData.map((section, index) => (
        <div key={index} className="mb-4 rounded-2xl shadow-md border bg-blue-100">
          <button
            onClick={() => toggleCard(index)}
            className="w-full px-6 py-4 text-left font-semibold text-lg flex justify-between items-center"
          >
            {section.title}
            <span>{openIndex === index ? '−' : '+'}</span>
          </button>

          {openIndex === index && (
            <div className="bg-white px-6 pb-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 font-medium text-gray-700">Name of the Fee</th>
                    <th className="py-2 font-medium text-gray-700">Calculation Method</th>
                    <th className="py-2 font-medium text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {section.fees.map((fee, i) => (
                    <tr key={i} className="border-b">
                      <td className="py-2 text-gray-800">{fee.name}</td>
                      <td className="py-2 text-gray-800">{fee.method}</td>
                      <td className="py-2 text-pink-600 font-semibold">{fee.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Discounts;


