import React from "react";

const PlanCard = ({ plan }) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${plan.color}`}>
      <div
        className={`px-6 py-8 ${plan.textColor} flex flex-col justify-between h-full`}
      >
        <div>
          <h3 className="text-lg font-medium mb-2">{plan.title}</h3>
          <div className="text-3xl font-bold mb-6">{plan.price}</div>
          <ul className="text-sm mb-8">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
               &#x25CF; {''}
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-white text-black font-semibold py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
