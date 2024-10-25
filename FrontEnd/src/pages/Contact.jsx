import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* Header with animation */}
      <div className="text-center text-2xl pt-10 text-gray-500 animate-[fadeIn_1s_ease-out]">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      {/* Main content section */}
      <div className="my-10 flex flex-col md:flex-row gap-12 mb-28 justify-center items-center">
        {/* Image with hover effect and animation */}
        <div className="w-full md:w-auto animate-[slideInLeft_1s_ease-out]">
          <img
            className="w-full md:max-w-[360px] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>

        {/* Contact information with animations */}
        <div className="flex flex-col justify-center items-start gap-8 animate-[fadeIn_1s_ease-out]">
          {/* Office Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5" />
              <p className="font-semibold text-lg">OUR OFFICE</p>
            </div>
            <p className="text-gray-500 pl-7 leading-relaxed">
              54709 Willms Station<br/>
              Suite 350, Washington, USA
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pl-7 text-gray-500 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <a href="tel:(415) 555-0132" className="hover:underline">
                +94 77 129 7490
              </a>
            </div>
            <div className="flex items-center gap-2 pl-7 text-gray-500 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <a href="mailto:tharakapathum75@gmail.com" className="hover:underline">
                tharakapathum75@gmail.com
              </a>
            </div>
          </div>

          {/* Careers Section */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <Briefcase className="w-5 h-5" />
              <p className="font-semibold text-lg">Careers at PRESCRIPTO</p>
            </div>
            <p className="text-gray-500 pl-7">
              Learn more about our teams and job openings.
            </p>
          </div>

          {/* Button with enhanced hover effect */}
          <button className="group relative overflow-hidden border border-black px-8 py-4 text-sm transition-all duration-300">
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
              Explore Jobs
            </span>
            <div className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-300 -z-0"></div>
          </button>
        </div>
      </div>
    </div>
  );
};



export default Contact;