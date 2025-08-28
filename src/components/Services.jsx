import React from "react";
import { Briefcase, Users, Shield, Clock } from "lucide-react";

const services = [
  {
    title: "Project Management",
    desc: "Organize, track, and manage your projects efficiently with our intuitive dashboard.",
    icon: <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Team Collaboration",
    desc: "Work together in real-time and keep everyone on the same page, no matter where they are.",
    icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "Data Security",
    desc: "Your data is safe with enterprise-grade security and encryption standards.",
    icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    title: "24/7 Support",
    desc: "Get round-the-clock support from our expert team whenever you need help.",
    icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Powerful features to help your team stay organized, secure, and productive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
