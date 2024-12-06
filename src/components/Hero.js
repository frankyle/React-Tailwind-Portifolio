import React from "react";
import { ReactTyped } from "react-typed";
import img1 from "./../images/grasses.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center text-white overflow-hidden"
      style={{ height: "60vh" }}
      
      >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl"
        style={{
          backgroundImage: `url(${img1})`,
          filter: "brightness(70%)",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center">
        {/* Animated Heading */}
        <div className="flex justify-center items-center space-x-2 mb-4">
          <h1
            className="text-2xl md:text-4xl font-bold animate-bounce-in-left"
            style={{
              animation: "bounce-in-left 2s both",
              background: "linear-gradient(to right, #4f46e5, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            I'm Frank
          </h1>
          <h1
            className="text-2xl md:text-4xl font-bold animate-bounce-in-right"
            style={{
              animation: "bounce-in-right 3s both",
              background: "linear-gradient(to right, #4f46e5, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Magai
          </h1>
        </div>
        <ReactTyped
          className="text-3xl md:text-5xl text-white font-semibold"
          strings={["WEB-DESIGNER", "PROGRAMMER", "SYSTEM DEVELOPER"]}
          typeSpeed={70}
          backSpeed={70}
          loop
        />
        
      </div>

        {/* Polygon Styling at the Bottom */}
        <div className="absolute bottom-0 w-full">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 160"
          >
            <path
              fill="#ffffff"
              d="M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,74,576,85.3C672,96,768,107,864,104C960,101,1056,85,1152,74.7C1248,64,1344,53,1392,48L1440,43.3L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
            ></path>
          </svg>
        </div>


      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(15%);
            opacity: 1;
          }
          80% {
            transform: translateX(0);
          }
        }
        @keyframes bounce-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            transform: translateX(-15%);
            opacity: 1;
          }
          80% {
            transform: translateX(0);
          }
        }
        .animate-bounce-in-left {
          animation: bounce-in-left 2s ease-out forwards;
        }
        .animate-bounce-in-right {
          animation: bounce-in-right 3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Hero;
