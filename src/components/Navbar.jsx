import { Link } from "react-router";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/newsletter", label: "Newsletter" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="px-4 flex items-center justify-between w-full sticky top-0 z-30 bg-white h-auto">
      <img src={logo} alt="Ovelia-logo" className="h-16 w-16 ml-3"></img>
      <nav className="hidden md:flex">
        <ul className="flex flex-row items-center text-navbar_text font-bold font-dmSans space-x-10 text-xl mr-6">
        {navigationItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="block md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {/* Hamburger Icon */}
        <div className="space-y-2">
          <span className="block w-8 h-1 bg-gray-800"></span>
          <span className="block w-8 h-1 bg-gray-800"></span>
          <span className="block w-8 h-1 bg-gray-800"></span>
        </div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg border-t-2 md:hidden transform transition-all duration-800 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <ul className="flex flex-col items-center text-navbar_text font-bold font-dmSans space-y-4 py-4">
        {navigationItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
