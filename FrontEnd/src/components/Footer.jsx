import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-8 md:gap-14 py-12">
          {/* left side */}
          <div className="animate-[fadeIn_0.6s_ease-in]">
            <img className="w-32 md:w-40 mb-4" src={assets.logo} alt="Logo" />
            <p className="text-gray-600 mb-5 max-w-xl text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
          </div>

          {/* center side */}
          <div className="animate-[fadeIn_0.6s_ease-in_0.2s]">
            <p className="text-lg md:text-xl font-medium mb-4">COMPANY</p>
            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">
                Home
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                About us
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Contact us
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                Privacy policy
              </li>
            </ul>
          </div>

          {/* right side */}
          <div className="animate-[fadeIn_0.6s_ease-in_0.4s]">
            <p className="text-lg md:text-xl font-medium mb-4">GET IN TOUCH</p>
            <ul className="flex flex-col gap-3 text-gray-600 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">
                Phone: +9477 1297 490
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                tharakapathum75@gmail.com
              </li>
              <li className="hover:text-primary cursor-pointer transition-colors">
                123 Main St, Malabe, Colombo
              </li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div>
          <hr className="border-gray-200" />
          <p className="py-6 text-sm text-center text-gray-600">
            Copyright © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Add these keyframes to your global CSS file
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Footer;