import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets_frontend/assets'


const MyAppointment = () => {

  const {doctors} = useContext(AppContext)
  return (
    <div>
      <p>My appointments</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div key={index}>
            
            <div>
            <img src={item.image} alt="" />
            </div>
            <div>
            <p>{item.name}</p>
              <p>{item.speciality}</p>
              <p>Address:</p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>
              <p><span>Date & Time:</span> 23, july, 2024 | 10:00 AM</p>
            </div>
            <div></div>
            <div>
              <button>Pay Online</button>
              <button>Cancel Appointment</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
