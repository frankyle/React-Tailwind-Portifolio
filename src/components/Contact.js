import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa'; // Importing React Icons

function Contact({id}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacyPolicy: false,
    captcha: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      privacyPolicy: false,
      captcha: '',
    });
  };

  return (
    <section id={id}>
    <div  className="bg-blue-50 p-8 flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 md:space-y-0">
        {/* Contact Details Section */}
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 w-full max-w-sm">
          <h2 className="text-3xl font-extrabold text-center mb-4 animate-bounce flex items-center justify-center space-x-2">
            <FaUserCircle className="text-2xl" />
            <span>CONTACT ME</span>
          </h2>
          <p className="text-sm mb-6 text-center">
            We'd love to hear from you! Reach out to us and we'll get back to you as soon as possible.
          </p>

          <div className="flex flex-col mb-4">
            <h3 className="text-lg font-bold mb-2 flex items-center justify-center">
            <FaWhatsapp className="mr-2 text-lg text-green-500" />
              WhatsApp
            </h3>
            <a href="tel:+255764998891" className="text-sm text-center">
              +255 764 998891
            </a>
          </div>

          <div className="flex flex-col mb-4">
            <h3 className="text-lg font-bold mb-2 flex items-center justify-center">
              <FaEnvelope className="mr-2 text-lg" />
              Email
            </h3>
            <a href="mailto:magaifrank@gmail.com" className="text-sm text-center">
              magaifrank@gmail.com
            </a>
          </div>

          <div className="flex flex-col mb-4">
            <h3 className="text-lg font-bold mb-2 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2 text-lg" />
              Address
            </h3>
            <p className="text-sm text-center">Dar es Salaam, Tanzania</p>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="flex flex-col p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 w-full max-w-md">
          <h3 className="text-xl font-bold text-center mb-4">Get in Touch</h3>

          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="flex flex-col mb-4 md:w-1/2">
              <label htmlFor="name" className="text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-1/2">
              <label htmlFor="phone" className="text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-sm font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;
