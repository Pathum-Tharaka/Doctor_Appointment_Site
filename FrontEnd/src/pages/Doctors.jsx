import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
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
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">
        Browse through our extensive list of trusted doctors
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate(`/doctors`)
                : navigate(`/doctors/General physician`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "General physician"
      ? "bg-blue-100 text-black"
      : "hover:bg-gray-50"
  }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Gynecologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "Gynecologist"
      ? "bg-blue-100 text-black"
      : "hover:bg-gray-50"
  }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Dermatologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "Dermatologist"
      ? "bg-blue-100 text-black"
      : "hover:bg-gray-50"
  }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Pediatricians`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "Pediatricians"
      ? "bg-blue-100 text-black"
      : "hover:bg-gray-50"
  }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Neurologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "Neurologist" ? "bg-blue-100 text-black" : "hover:bg-gray-50"
  }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate(`/doctors`)
                : navigate(`/doctors/Gastroenterologist`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded 
  transition-all duration-300 ease-in-out cursor-pointer 
  hover:shadow-md hover:scale-[1.02] hover:border-blue-300
  active:scale-95 
  ${
    speciality === "Gastroenterologist"
      ? "bg-blue-100 text-black"
      : "hover:bg-gray-50"
  }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 pt-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
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
