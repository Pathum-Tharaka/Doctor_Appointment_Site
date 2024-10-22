import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
    // Trigger animation after a small delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [doctors, speciality]);

  const specialtyButtonClass = (currentSpecialty) => `
    w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
    transition-all duration-300 ease-in-out cursor-pointer 
    hover:shadow-md hover:scale-[1.02] hover:border-blue-300
    active:scale-95 
    opacity-0 transform -translate-x-4
    ${isLoaded ? 'opacity-100 translate-x-0' : ''}
    ${currentSpecialty === speciality ? 'bg-blue-100 text-black' : 'hover:bg-gray-50'}
  `;

  const doctorCardClass = (index) => `
    border border-blue-200 rounded-xl overflow-hidden cursor-pointer
    transition-all duration-500
    opacity-0 transform translate-y-1
    ${isLoaded ? 'opacity-100 translate-y-0 hover:translate-y-[-10px]' : ''}
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  `;

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <p className="text-gray-600 animate-fade-in">
        Browse through our extensive list of trusted doctors
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col  gap-4 text-sm text-gray-600">
          {[
            "General physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist"
          ].map((specialty, index) => (
            <p
              key={specialty}
              onClick={() =>
                speciality === specialty
                  ? navigate(`/doctors`)
                  : navigate(`/doctors/${specialty}`)
              }
              className={specialtyButtonClass(specialty)}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {specialty}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-auto gap-4  gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className={doctorCardClass(index)}
              style={{
                transitionDelay: `${(index * 100) + 400}ms`
              }}
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;