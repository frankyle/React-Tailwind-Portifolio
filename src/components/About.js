import React from "react";
import img2 from './../images/my_profile.jpg';

const About = ({id}) => {
  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={img2}
            alt="About Me"
            className="w-4/5 md:w-3/4 h-auto rounded-lg shadow-lg object-cover animate__animated animate__fadeIn animate__delay-1s"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex items-center justify-center md:justify-start mb-4 animate__animated animate__fadeInDown animate__delay-2s">
              <h2 className="text-3xl font-bold text-gray-800">
              <span className="relative inline-block">
                <span className="absolute inset-0 text-blue-500 animate-ping">
                  About Me
                </span>
                <span className="relative text-gray-800">About Me</span>
              </span>
            </h2>
          </div>

          <p className="text-base text-gray-600 leading-loose mb-4 animate__animated animate__fadeIn animate__delay-3s">
            I am a Web Designer, Developer, and Programmer with a passion for
            creating clean, functional, and visually appealing websites. I
            specialize in building user-friendly web applications and custom
            solutions that meet the unique needs of my clients.
          </p>
          <p className="text-base text-gray-600 leading-loose animate__animated animate__fadeIn animate__delay-4s">
            As a System Developer, I focus on designing efficient and scalable
            systems that help businesses grow. Whether it's creating a website,
            web app, or a complex system, I bring your ideas to life with a mix
            of creativity and technical expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
