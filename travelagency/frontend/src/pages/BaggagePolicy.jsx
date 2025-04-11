import React from 'react';

const BaggagePolicy = () => {
    return (
        <div className="min-h-screen bg-white text-black py-10 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-pink-600 mb-6">What is the baggage policy?</h1>
            <p className="mb-4">
                Each passenger is allowed to carry one cabin bag and one personal item free of charge. 
                Additional baggage can be added during the booking process or through your account.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cabin bag must not exceed 8 kg in weight and 55x40x20 cm in dimensions.</li>
                <li>Personal items include items like a purse, laptop bag, or small backpack.</li>
                <li>Excess baggage charges apply based on weight and size.</li>
            </ul>
        </div>
    );
};

export default BaggagePolicy;
