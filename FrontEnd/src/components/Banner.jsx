import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";





const Banner = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById('animated-banner');
      if (banner) {
        const rect = banner.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="animated-banner"
      className={`flex bg-primary rounded-lg px-6 sm:px-10 md:mx-10 mt-10 lg:px-12 my-20 md:px-14 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Right side Banner */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p className="mt-4">
            With 100<span className="text-blue-900">+</span> Trusted Doctors
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            window.scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-6 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300 self-start"
        >
          Create Account
        </button>
      </div>

      {/* Left side Banner */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
      <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;