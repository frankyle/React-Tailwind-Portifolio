import React from 'react';
import img1 from './../images/mgi-tours.jpg';
import img2 from './../images/monkey-mountain.jpg';
import img3 from './../images/mgi-candles.jpg';
import img4 from './../images/computer.jpg';

const Portfolio = ({id}) => {
  const projects = [
    {
      image: img1,
      title: "Mgi Tours",
      description: "A website dedicated to promoting tourism and showcasing beautiful travel destinations.",
      url: "https://frankyle.github.io/Tours-Website/",
    },
    {
      image: img2,
      title: "Monkey Mountain",
      description: "A luxurious hotel in Zanzibar offering the best hospitality and serene surroundings.",
      url: "https://frankyle.github.io/Monkey-Mountain-web/",
    },
    {
      image: img3,
      title: "Mgi Candles",
      description: "A platform for forex training, providing resources and guidance for beginners and experts.",
      url: "https://mgicandles.vercel.app/",
    },
    {
      image: img4,
      title: "Mgi Puzzles",
      description: "An e-commerce platform for selling high-quality and customizable puzzles.",
      url: "https://example.com/mgi-puzzles",
    },
  ];

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Portfolio Section Title */}
        <div className="mb-12">
          <span className="block text-blue-500 text-6xl mb-2 animate-bounce">★</span>
          <h2 className="text-5xl font-extrabold text-gray-800 relative inline-block">
            Portfolio
          </h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto mt-3"></div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2
              ${index % 2 === 0 ? 'animate-fadeInUp' : 'animate-fadeInDown'}`}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                <span className="text-blue-500">◈ </span>
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              
              {/* Preview Link */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                Preview
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
