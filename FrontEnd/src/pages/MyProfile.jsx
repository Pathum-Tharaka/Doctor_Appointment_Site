import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { Edit3, Save } from "lucide-react";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "HsI6o@example.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-4xl mt-[-4vh] mx-auto p-6 animate-[fadeIn_0.6s_ease-in]">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8 animate-[fadeIn_0.6s_ease-in_0.2s]">
          <div className="relative mb-4">
            <img 
              src={userData.image} 
              alt="" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
            />
          </div>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
              className="text-2xl font-semibold text-center px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          ) : (
            <p className="text-2xl font-semibold">{userData.name}</p>
          )}
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Contact Information */}
        <div className="space-y-8 animate-[fadeIn_0.6s_ease-in_0.4s]">
          <div className="bg-gray-50 p-6 rounded-xl">
            <p className="text-lg font-semibold text-gray-800 mb-4">CONTACT INFORMATION</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email id:</p>
                <p className="text-gray-700">{userData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone no:</p>
                {isEdit ? (
                  <input
                    type="text"
                    value={userData.phone}
                    onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ) : (
                  <p className="text-gray-700">{userData.phone}</p>
                )}
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500 mb-1">Address:</p>
                {isEdit ? (
                  <div className="space-y-2">
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line1: e.target.value },
                        }))
                      }
                      value={userData.address.line1}
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: { ...prev.address, line2: e.target.value },
                        }))
                      }
                      value={userData.address.line2}
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ) : (
                  <p className="text-gray-700">
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-gray-50 p-6 rounded-xl animate-[fadeIn_0.6s_ease-in_0.6s]">
            <p className="text-lg font-semibold text-gray-800 mb-4">BASIC INFORMATION</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Gender:</p>
                {isEdit ? (
                  <select
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, gender: e.target.value }))
                    }
                    value={userData.gender}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                ) : (
                  <p className="text-gray-700">{userData.gender}</p>
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date of Birth:</p>
                {isEdit ? (
                  <input
                    type="date"
                    value={userData.dob}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, dob: e.target.value }))
                    }
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ) : (
                  <p className="text-gray-700">{userData.dob}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Edit/Save Button */}
        <div className="mt-4 flex justify-center  animate-[fadeIn_0.6s_ease-in_0.8s]">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Save size={20} />
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Edit3 size={20} />
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;