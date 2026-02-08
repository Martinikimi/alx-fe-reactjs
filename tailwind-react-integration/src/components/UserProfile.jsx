import React from 'react';
import profileImage from '/profile-image.jpg';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* Image styled with w-36 h-36 */}
      <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6">
        <img 
          src={profileImage} 
          alt="User Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Heading styled with text-xl text-blue-800 my-4 */}
      <h1 className="text-xl text-blue-800 my-4 text-center">
        Alex Johnson
      </h1>
      
      {/* Paragraphs styled */}
      <p className="text-gray-600 text-center mb-4">
        Passionate frontend developer with 5+ years of experience building modern web applications. 
        Specializing in React, Tailwind CSS, and responsive design.
      </p>
      
      <p className="text-gray-600 text-center mb-6">
        When not coding, I enjoy hiking, photography, and contributing to open-source projects.
      </p>
      
      <div className="flex space-x-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
          Follow
        </button>
        <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded border border-gray-300 transition duration-200">
          Message
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
