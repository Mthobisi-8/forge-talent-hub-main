import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Menu is closed initially

  return (
    <>
      {/* Navbar Container */}
      <nav className="bg-primary p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">
            MyApp
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 text-white">
            {["About", "Courses", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <Link to={`/${item.toLowerCase()}`} className="hover:text-gray-200">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Overlay (Closes sidebar when clicked) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden" 
          onClick={() => setIsOpen(false)} // Close menu on click outside
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-700"
        >
          <X size={24} />
        </button>
        
        {/* Sidebar Links */}
        <ul className="mt-12 space-y-4 text-gray-900">
          {["About", "Courses", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item.toLowerCase()}`} 
                className="block p-4 hover:bg-gray-200"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
