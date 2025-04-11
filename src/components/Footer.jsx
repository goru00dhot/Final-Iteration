import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-90 backdrop-blur-sm shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;