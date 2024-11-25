import React from "react";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          Interested in working together? Start build something amazing!
        </p>
        <a
          href="mailto:your-email@example.com"
          className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold shadow-md hover:bg-gray-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
