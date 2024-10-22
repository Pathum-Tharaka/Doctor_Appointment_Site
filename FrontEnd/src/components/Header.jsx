import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('animated-header');
      if (header) {
        const rect = header.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight * 0.25; // Adjust this value to change when the animation triggers
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="animated-header" className={`flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* --------- left side----------- */}
      <div className={`md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className="flex flex-col gap-3 md:flex-row item-center text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="Group profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block"/>
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className={`inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm self-start hover:scale-105 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow icon" />
        </a>
      </div>

      {/* --------- right side----------- */}
      <div className={`md:w-1/2 relative transition-all duration-1000 delay-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        <img className="w-full md:absolute bottom-0 h-auto rounded-lg" src={assets.header_img} alt="Header illustration" />
      </div>
    </div>
  );
};

export default Header;