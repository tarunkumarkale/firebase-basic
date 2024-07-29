import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './context/firebasecontext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const first=useFirebase()

console.log(first.islogin)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-bold">
          <Link to="/">Brand</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/book/list" className="block px-4 py-2 text-gray-300 hover:text-white">Add new book here</Link>
          {
            first.islogin?   <Link to="/Register" className="block px-4 py-2 text-gray-300 hover:text-white">Login</Link>:   <Link to="/Login" className="block px-4 py-2 text-gray-300 hover:text-white">Register</Link>
          }
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-white">Home</Link>
          <Link to="/book/list" className="block px-4 py-2 text-gray-300 hover:text-white">Add new book here</Link>

          {
            first.islogin?   <Link to="/Register" className="block px-4 py-2 text-gray-300 hover:text-white">Login</Link>:   <Link to="/Login" className="block px-4 py-2 text-gray-300 hover:text-white">Register</Link>
          }
       
          
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;
