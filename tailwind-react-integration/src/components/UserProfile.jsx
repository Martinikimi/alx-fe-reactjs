import React from 'react';
import profileImage from '/profile-image.jpg';

const UserProfile = () => {
  return (
    {/* Enhanced Shadows on Card Hover: hover:shadow-xl */}
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm mx-auto my-8 sm:my-12 md:my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      {/* Hover Effects on Profile Image: hover:scale-110 with transition */}
      <div className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-4 sm:mb-5 md:mb-6 transition-transform duration-300 ease-in-out hover:scale-110">
        <img 
          src={profileImage} 
          alt="User Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Emphasis on Hover: hover:text-blue-500 */}
      <h1 className="sm:text-lg md:text-xl text-blue-800 hover:text-blue-500 my-3 sm:my-3 md:my-4 text-center transition-colors duration-300">
        Alex Johnson
      </h1>
      
      {/* Paragraphs with transition effects */}
      <p className="sm:text-sm md:text-base text-gray-600 hover:text-gray-800 text-center mb-3 sm:mb-3 md:mb-4 transition-colors duration-300">
        Passionate frontend developer with 5+ years of experience building modern web applications. 
        Specializing in React, Tailwind CSS, and responsive design.
      </p>
      
      <p className="sm:text-sm md:text-base text-gray-600 hover:text-gray-800 text-center mb-4 sm:mb-5 md:mb-6 transition-colors duration-300">
        When not coding, I enjoy hiking, photography, and contributing to open-source projects.
      </p>
      
      {/* Buttons with hover effects */}
      <div className="flex space-x-2 sm:space-x-2 md:space-x-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded transition-all duration-300 ease-in-out hover:scale-105 text-sm sm:text-sm md:text-base shadow-md hover:shadow-lg">
          Follow
        </button>
        <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-3 sm:py-2 sm:px-3 md:py-2 md:px-4 rounded border border-gray-300 transition-all duration-300 ease-in-out hover:scale-105 text-sm sm:text-sm md:text-base shadow-md hover:shadow-lg">
          Message
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
