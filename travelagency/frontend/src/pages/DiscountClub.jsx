import React from 'react';

const plans = [
  {
    name: "DISCOUNT CLUB LIGHT",
    price: "Non-paid",
    benefits: [
      "Exclusive onboard coupons",
      "Café & Boutique promotions"
    ],
    disabled: [
      "€10.00 discount on flight fares from €19.99",
      "€5.00 discount on checked-in baggages",
      "Priority with trolley bag",
      "Premium seat selection"
    ],
    button: "Go to My Profile",
    color: "border-gray-200",
    bg: "bg-white",
    btnColor: "bg-blue-600",
    btnText: "text-white"
  },
  {
    name: "DISCOUNT CLUB STANDARD",
    price: "€39.99 / year",
    subtitle: "Benefits for you and 1 companion.",
    benefits: [
      "Exclusive onboard coupons",
      "Café & Boutique promotions",
      "€10.00 discount on flight fares from €19.99",
      "€5.00 discount on checked-in baggages"
    ],
    disabled: [
      "Priority with trolley bag",
      "Premium seat selection"
    ],
    button: "Book now",
    color: "border-blue-400",
    bg: "bg-white",
    btnColor: "bg-blue-700",
    btnText: "text-white"
  },
  {
    name: "DISCOUNT CLUB PREMIUM",
    price: "€349.99 / year",
    subtitle: "Benefits for you and 1 companion.",
    benefits: [
      "Exclusive onboard coupons",
      "Café & Boutique promotions",
      "€10.00 discount on flight fares from €19.99",
      "€5.00 discount on checked-in baggages",
      "WIZZ Priority with trolley bag",
      "Premium seat selection"
    ],
    disabled: [],
    button: "Book now",
    color: "border-pink-400",
    bg: "bg-white",
    btnColor: "bg-pink-600",
    btnText: "text-white"
  }
];

const DiscountClub = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Discount Club Memberships</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-6 border-2 ${plan.color} ${plan.bg} flex flex-col justify-between transition-transform transform hover:scale-105`}
          >
            <div>
              <h2 className="text-xl font-semibold text-purple-600 mb-2">{plan.name}</h2>
              <p className="text-2xl font-bold mb-2">{plan.price}</p>
              {plan.subtitle && <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>}
              <ul className="mb-4 space-y-2">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="text-green-700 font-medium flex items-center">
                    <span className="mr-2">✔️</span>
                    <span>{benefit}</span>
                  </li>
                ))}
                {plan.disabled.map((item, i) => (
                  <li key={i} className="text-gray-400 line-through flex items-center">
                    <span className="mr-2">❌</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-4 w-full py-2 rounded-xl font-semibold ${plan.btnColor} ${plan.btnText} hover:opacity-80 transition`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountClub;
