import React, { useState } from "react";

const Navbar = () => {
  const menuItems = ["Home", "Skills", "Projects", "Experience", "Education", "Contact"];
  const [activeSection, setActiveSection] = useState("Home");

  const handleNavClick = (item) => {
    setActiveSection(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Saloni.Dev
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item ? "text-purple-400" : "text-gray-300 hover:text-purple-400"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
