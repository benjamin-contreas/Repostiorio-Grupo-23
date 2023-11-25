import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-lg font-bold">Your Company Name</p>
          <p className="text-sm">Address, City, Country</p>
        </div>
        <div>
          <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
