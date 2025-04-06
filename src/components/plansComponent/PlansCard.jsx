import React from 'react'

const PlanCard = ({ name, price, features  }) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{name}</h3>
        <p className="text-xl font-bold text-blue-500">{price}</p>
        <ul className="mt-4 space-y-2 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">✅ {feature}</li>
          ))}
        </ul>
        <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    );
  };

export default PlanCard
