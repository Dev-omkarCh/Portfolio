import { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useTheme from '../store/themeStore';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const {theme, setTheme} = useTheme();

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative z-50 sm:hidden ">
      <button
        onClick={() => setIsOpen(true)}
        className="text-3xl p-2 "
      >
        <FiMenu />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 ${theme ? "bg-dark-secondary" : "bg-light-tertiary"} shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className={`flex justify-between items-center p-4 border-b-2 ${theme ? " border-dark bg-dark-primary" : "border-light bg-light-primary"}`}>
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>

        {/* Menu Items */}
        <nav className={`flex flex-col gap-4 p-4`}>
          <Link to="/" className={`${theme ? "hover:bg-dark-primary" : "hover:bg-light-primary"} pl-3 transition-all duration-300 ease-in-out p-2 rounded-md`}>Home</Link>
          <Link to="/about" className={`${theme ? "hover:bg-dark-primary" : "hover:bg-light-primary"} pl-3 transition-all duration-300 ease-in-out p-2 rounded-md`}>About</Link>
          
          <Link to="/contact" className={`${theme ? "hover:bg-dark-primary" : "hover:bg-light-primary"} pl-3 transition-all duration-300 ease-in-out p-2 rounded-md`}>Contact</Link>
        </nav>
      </div>
    </div>
  );
}
