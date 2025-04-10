import React, { useState } from 'react';
import { Menu, Plus, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTaskContext } from '../context/TaskContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lists } = useTaskContext();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#ff4d8d] text-white shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-[#ff3377] rounded-lg transition-colors md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link to="/" className="text-xl font-bold flex items-center space-x-2">
              <Menu className="h-6 w-6" />
              <span>TASK MANAGER</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <select
              onChange={(e) => navigate(e.target.value)}
              value={location.pathname}
              className="bg-white text-gray-800 px-4 py-2 rounded-full cursor-pointer"
            >
              <option value="" disabled>Select List</option>
              {lists.map(list => (
                <option key={list.id} value={`/list/${list.id}`}>
                  {list.name}
                </option>
              ))}
            </select>
            
            <div className="flex space-x-4 text-white">
              <Link to="/" className="hover:text-gray-200 px-3 py-2 rounded-lg hover:bg-[#ff3377] transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-200 px-3 py-2 rounded-lg hover:bg-[#ff3377] transition-colors">
                About
              </Link>
              <Link to="/contact" className="hover:text-gray-200 px-3 py-2 rounded-lg hover:bg-[#ff3377] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#ff4d8d] shadow-lg z-50">
            <div className="px-4 py-2 space-y-2">
              <select
                onChange={(e) => {
                  navigate(e.target.value);
                  setIsMenuOpen(false);
                }}
                value={location.pathname}
                className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg mb-2"
              >
                <option value="" disabled>Select List</option>
                {lists.map(list => (
                  <option key={list.id} value={`/list/${list.id}`}>
                    {list.name}
                  </option>
                ))}
              </select>
              
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-[#ff3377] rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-[#ff3377] rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 hover:bg-[#ff3377] rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;