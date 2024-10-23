import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FileQuestion } from "lucide-react";

// Fixed the props destructuring
const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDocs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
      // Add small delay for animation
      setTimeout(() => setIsLoaded(true), 100);
    }
  }, [doctors, speciality, docId]);

  const EmptyState = () => (
    <div
      className={`
      w-full flex flex-col items-center justify-center py-8
      opacity-0 transform translate-y-8
      ${isLoaded ? "opacity-100 translate-y-0" : ""}
      transition-all duration-500 delay-300
    `}
    >
      <FileQuestion size={48} className="text-gray-400 mb-4" />
      <h3 className="text-xl font-medium text-gray-900 mb-2">
        No Related Doctors
      </h3>
      <p className="text-gray-600 text-center max-w-md">
        We couldn't find other doctors specializing in {speciality} at this
        moment.
      </p>
    </div>
  );

  return (
    <div
      className={`
      flex flex-col items-center gap-4 py-16 text-gray-900 md:mx-10
      opacity-0 transform translate-y-4
      ${isLoaded ? "opacity-100 translate-y-0" : ""}
      transition-all duration-500
    `}
    >
      <h1 className="text-3xl font-medium">Related Doctors</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-4 gap-y-6 px-3 sm:px-0">
        {relDoc.length > 0 ? (
          relDoc.slice(0, 5).map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className={`
                border border-blue-200 rounded-xl overflow-hidden cursor-pointer
                transition-all duration-500
                opacity-0 transform translate-y-8
                ${
                  isLoaded
                    ? "opacity-100 translate-y-0 hover:translate-y-[-10px]"
                    : ""
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
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
          ))
        ) : (
          <EmptyState />
        )}
      </div>
      {relDoc.length > 0 && (
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
          className="bg-blue-100 px-12 py-3 rounded-full text-gray-600 text-sm mt-10 
                     hover:scale-105 transition-all duration-300"
        >
          View All
        </button>
      )}
    </div>
  );
};

export default RelatedDoctors;
