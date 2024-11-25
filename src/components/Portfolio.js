import React from "react";

const portfolioItems = ["Project 1", "Project 2", "Project 3"];

const Portfolio = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-gray-700"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
