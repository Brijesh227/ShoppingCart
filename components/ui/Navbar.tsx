import React from 'react';


const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-white">Shopping Cart</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
