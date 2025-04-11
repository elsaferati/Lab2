import { CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const plans = ["Basic", "Smart", "Protect"];
const features = [
  { label: "Medical coverage", values: [true, true, true] },
  { label: "Trip cancellation", values: [false, true, true] },
  { label: "Lost luggage", values: [false, true, true] },
  { label: "Emergency assistance", values: [true, true, true] },
  { label: "Flight delay compensation", values: [false, false, true] },
];

const InsuranceIntro = () => (
  <section className="text-center px-4 py-10">
    <h2 className="text-3xl font-bold mb-4">Travel Insurance</h2>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
      Protect your trip and get peace of mind with our travel insurance coverage.
    </p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow-md">
      Get insurance
    </button>
  </section>
);

const InsuranceComparisonTable = () => (
  <div className="overflow-x-auto px-4">
    <table className="w-full text-center border border-gray-200">
      <thead>
        <tr>
          <th className="border px-4 py-2">Features</th>
          {plans.map((plan) => (
            <th key={plan} className="border px-4 py-2 text-lg font-semibold">
              {plan}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((feature) => (
          <tr key={feature.label}>
            <td className="border px-4 py-2 text-left font-medium">{feature.label}</td>
            {feature.values.map((val, idx) => (
              <td key={idx} className="border px-4 py-2">
                {val ? (
                  <CheckCircle className="mx-auto text-green-600" />
                ) : (
                  <XCircle className="mx-auto text-red-500" />
                )}
              </td>
            ))}
          </tr>
        ))}
        <tr>
          <td className="border px-4 py-2 font-semibold">Choose Plan</td>
          {plans.map((plan) => (
            <td key={plan} className="border px-4 py-2">
              <button className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700">
                Select
              </button>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

const PlanDetailsAccordion = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => setOpen(open === index ? null : index);

  const details = [
    {
      title: "What's included in Basic?",
      content: "Basic covers medical emergencies and assistance only."
    },
    {
      title: "Smart Plan Coverage",
      content: "Includes medical, trip cancellation, and luggage protection."
    },
    {
      title: "Protect Plan Benefits",
      content: "Full coverage including delays and all Smart plan features."
    }
  ];

  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      {details.map((item, index) => (
        <div key={index} className="mb-4 border rounded-xl">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 bg-gray-100 font-semibold rounded-t-xl"
          >
            {item.title}
          </button>
          {open === index && (
            <div className="px-4 py-2 text-gray-700 bg-white rounded-b-xl">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const TravelInsurancePage = () => (
  <div className="py-8">
    <InsuranceIntro />
    <InsuranceComparisonTable />
    <PlanDetailsAccordion />
  </div>
);

export default TravelInsurancePage;
