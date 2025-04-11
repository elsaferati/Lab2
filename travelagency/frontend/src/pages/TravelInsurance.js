import React from "react";

const TravelInsurance = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Information & Services</h1>
      
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 mb-10 md:mb-0">
          <ul className="text-pink-600 font-semibold space-y-3">
            <li>Travel information</li>
            <li>Prices & discounts</li>
            <li>WIZZ Memberships</li>
            <li>WIZZ Services</li>
            <li className="font-bold text-blue-800">Partner services Terms & Conditions</li>
            <li className="ml-4">Hotels</li>
            <li className="ml-4">Car rental</li>
            <li className="ml-4">Airport parking</li>
            <li className="ml-4">Airport transfer</li>
            <li className="ml-4">WIZZ Credit Card</li>
            <li className="font-bold text-blue-800">Travel Insurance</li>
            <li>About eSIM data roaming</li>
            <li>Delayed Baggage Protection</li>
            <li>WIZZ Experiences</li>
            <li>WIZZ Shop & Fly</li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/4 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-800">Travel Insurance</h2>
            <p className="mt-2">
              Protect yourself and your travel companions by adding travel insurance when booking your flight.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-800">Submitting a Travel Insurance Claim</h3>
            <p className="mt-2">
              If you have purchased Travel Insurance with your Wizz Air booking, you can submit a travel insurance claim
              using the Claims Portal found <a href="#" className="text-pink-600 underline">here</a>. When you open this
              link you will be able to select your language of choice using the language drop-down selector, in the top
              right corner.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-800">Comprehensive Travel Insurance</h3>
            <p className="mt-2">
              The Comprehensive Travel Insurance policy is available for customers who are resident and located in
              Belgium, Bulgaria, Cyprus, Czech Republic, France, Germany, Hungary, Italy, Latvia, Lithuania, Malta,
              Netherlands, Poland, Portugal, Romania, Slovakia, Spain, Switzerland and the UK and includes the
              following:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>access to 24/7 emergency medical assistance</li>
              <li>cancellation cover</li>
              <li>overseas medical expenses cover</li>
              <li>cover for lost or stolen baggage</li>
              <li>missed departure cover</li>
              <li>accidental death cover</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-blue-800">Cancellation Insurance</h3>
            <p className="mt-2">
              The Cancellation Insurance policy is available for customers who are resident and located in Belgium,
              Bulgaria, Czech Republic, Denmark, Finland, France, Germany, Hungary, Italy, Netherlands, Norway, Poland,
              Portugal, Romania, Spain, Sweden and Switzerland and includes the following:
            </p>
            <ul className="list-disc list-inside mt-2 ml-4">
              <li>cancellation cover</li>
              <li>cover if you have to cut short your trip</li>
            </ul>
            <p className="mt-4">
              See the <a href="#" className="text-pink-600 underline">Policy Wording</a> for more information.
            </p>
            <div className="border border-pink-600 text-pink-600 p-4 mt-4 rounded">
              The cost is calculated automatically when you book and depends on the length of your trip. Trips of over 30
              days are not covered. To buy insurance, you and anyone travelling with you must be under 65 years of age
              at the time of buying the policy. Cover is not provided for travel to or through Cuba.
            </div>
          </section>

          <section className="text-sm text-gray-700 mt-6 space-y-2">
            <p>
              Chubb European Group SE and Chubb Insurance Switzerland (for Switzerland only) are the insurers for the
              above mentioned travel insurance products.
            </p>
            <p>
              Chubb European Group SE is an undertaking governed by the provisions of the French insurance code with
              registration number 450 327 374 RCS Nanterre and the following registered office: La Tour Carpe Diem, 31
              Place des Corolles, Esplanade Nord, 92400 Courbevoie, France. Chubb European Group SE has fully paid
              share capital of €896,176,662.
            </p>
            <p>
              Wizz Air Hungary Airlines Ltd is an Appointed Representative (ref. no 494158) of Chubb European Group SE
              for the UK. The registrations can be checked on the Financial Services Register at{" "}
              <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">
                https://register.fca.org.uk
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelInsurance;
