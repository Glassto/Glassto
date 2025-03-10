import React, { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMobileMenu = () => {
      setIsOpen(!isOpen);
    };

    const mobileMenu = document.querySelector(".mobile-menu");

    mobileMenu.addEventListener("click", handleMobileMenu);
    return () => {
      mobileMenu.removeEventListener("click", handleMobileMenu);
    };
  }, [isOpen]);

  return (
    <>
      {/* Header */}
      <header className="flex fixed left-0 sm:w-[calc(100%-80px)] w-[calc(100%-30px)] sm:mx-10 mx-4 items-center gap-4">
        {/* Navbar */}

        <nav
          className={`relative overflow-hidden flex justify-between items-center w-full xs:min-h-15.5 min-h-12 px-4 pr-3 border rounded-2xl backdrop-blur-sm bg-primary/15 hover:bg-primary/40 hover:drop-shadow-xl border-secondary/40 transition-all duration-300 ${
            isScrolled ? "bg-primary/40 backdrop-blur-2xl" : ""
          }`}
        >
          {/* Nav animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-full top-0 w-1/2 h-full animate-glow-sweep bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-20" />
          </div>

          {/* Left-side */}
          <div className="left flex items-center gap-3 min-w-36 xs:py-4 py-3">
            <img src="images/light-logo.svg" alt="Logo" className="h-6 w-6" />
            <h1 className="font-dm-sans text-xl font-semibold text-[#FDE5D5]">
              Glassto
            </h1>
          </div>

          {/* Middle-side gap-6 */}
          <ul className="middle hidden lg:flex  gap-10 ">
            <li>Home</li>
            <li className="flex items-center justify-center gap-0.75">
              <p>Services</p>
              <img
                src="images/chevron-down.svg"
                alt="Chevron Down"
                className="h-4 opacity-60"
              />
            </li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>

          {/* Right-side */}
          <div className="right hidden xs:flex items-center justify-end min-w-36 py-3 gap-4 ">
            <button className="flex items-center gap-3 w-max px-4 py-1.5 bg-radial-[at_-50%_-75%] hover:scale-105 hover:-translate-x-1 hover:drop-shadow-2xl from-accent-light to-accent font-inter transition-all duration-300 truncate text-white font-semibold rounded-lg">
              <p>Contact Us</p>
              <img src="images/arrow-top-right.svg" alt="Arrow Top Right" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu lg:hidden flex items-center justify-around xs:min-h-15.5 min-h-13.5 w-17 bg-primary/15 backdrop-blur-sm border border-secondary/40 rounded-2xl transition-all duration-300 ${
            isScrolled ? "bg-primary/40" : ""
          }`}
        >
          <img
            src="images/burger-menu.svg"
            alt="Burger Menu"
            className="h-8 w-8"
          />
        </div>
      </header>
      <MobileMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
