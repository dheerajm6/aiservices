import React from 'react';
import logoImage from '../assets/valcom-logo.png'; // Update this path based on your image file

const Logo = ({ className = "w-48 h-14" }) => {
  return (
    <img 
      src={logoImage} 
      alt="Valcom AI Services - Intelligent AI and IoT Solutions for Industrial Operations" 
      className={`${className} object-contain`}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;