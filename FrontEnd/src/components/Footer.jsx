import React from 'react'
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left side */}
            <div>
                <img className="w-40 mb-5" src={assets.logo} alt="" />
                <p className='text-gray-600 mb-5 w-[80%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/* center side */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/* right side */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Phone: +9477 1297 490</li>
                    <li>tharakapathum75@gamil.com</li>
                    <li>123 Main St, Malabe, Colombo</li>
                </ul>
            </div>
        </div>
        {/* copyright */}
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
