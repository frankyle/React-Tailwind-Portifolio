import React from "react";

const services = [
  {
    title: "System Development",
    description:
      "Crafting scalable, user-friendly systems tailored to your unique needs.",
    color: "from-blue-500 to-green-500",
  },
  {
    title: "Forex Trading",
    description:
      "Delivering expert trading strategies and insights for profitable results.",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Tech Consultation",
    description:
      "Helping businesses adopt technology and optimize operations effectively.",
    color: "from-purple-500 to-pink-500",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          What I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 bg-gradient-to-r ${service.color} text-white rounded-lg shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
