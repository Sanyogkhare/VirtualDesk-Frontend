import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      title: "Fast & Reliable",
      desc: "Optimized performance and secure architecture to handle your projects efficiently.",
    },
    {
      title: "Scalable Solutions",
      desc: "Easily scale from small projects to enterprise level without any hassle.",
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated team is always available to assist you at any stage.",
    },
    {
      title: "Affordable Pricing",
      desc: "Choose a plan that suits your needs without breaking the bank.",
    },
  ];

  return (
    <section id="whyus" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We provide modern, scalable and affordable solutions to make your work easier.
        </p>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md border bg-gray-50 dark:bg-gray-900 
                         border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <CheckCircle className="mx-auto mb-4 text-blue-600 w-10 h-10" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
