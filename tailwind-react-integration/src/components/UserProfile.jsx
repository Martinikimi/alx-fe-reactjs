import React from 'react';
import profileImage from '/profile-image.jpg';

const UserProfile = () => {
  return (
    {/* Responsive Container Adjustments: p-4 on sm, p-8 on md and above; max-w-xs on small, max-w-sm on medium and above */}
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-8 sm:my-12 md:my-20 rounded-lg shadow-lg">
      
      {/* Responsive Image Sizing: w-24 h-24 on sm, w-36 h-36 on md and above */}
      <div className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-4 sm:mb-5 md:mb-6">
        <img 
          src={profileImage} 
          alt="User Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Responsive Typography: text-lg on sm, text-xl on md and above */}
      <h1 className="sm:text-lg md:text-xl text-blue-800 my-3 sm:my-3 md:my-4 text-center">
        Alex Johnson
      </h1>
      
      {/* Responsive Typography: text-sm on sm, text-base on md and above */}
      <p className="sm:text-sm md:text-base text-gray-600 text-center mb-3 sm:mb-3 md:mb-4">
        Passionate frontend developer with 5+ years of experience building modern web applications. 
        Specializing in React, Tailwind CSS, and responsive design.
      </p>
      
      <p className="sm:text-sm md:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6">
        When not coding, I enjoy hiking, photography, and contributing to open-source projects.
      </p>
      
      <div className="flex space-x-2 sm:space-x-2 md:space-x-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded transition duration-200 text-sm sm:text-sm md:text-base">
          Follow
        </button>
        <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-3 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded border border-gray-300 transition duration-200 text-sm sm:text-sm md:text-base">
          Message
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
