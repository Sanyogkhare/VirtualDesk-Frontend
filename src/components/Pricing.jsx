import React from "react";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      features: ["1 Project", "5 GB Storage", "Basic Support", "Community Access"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      features: ["5 Projects", "50 GB Storage", "Priority Support", "Advanced Tools"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      features: ["Unlimited Projects", "500 GB Storage", "24/7 Premium Support", "Custom Solutions"],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Pricing Plans
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Choose a plan that fits your needs. Upgrade anytime as you grow.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl shadow-md border transition transform hover:-translate-y-2 hover:shadow-lg 
              ${plan.highlight ? "bg-blue-600 text-white border-blue-600" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"}`}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-lg">/mo</span></p>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition 
                ${plan.highlight
                  ? "bg-white text-blue-600 hover:bg-gray-200"
                  : "bg-blue-600 text-white hover:bg-blue-700"}`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
