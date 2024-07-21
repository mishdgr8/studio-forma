"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTitle(true);
        setShowIcons(false);
      } else {
        setShowTitle(false);
        setShowIcons(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bg-inherit top-0 left-0 w-full z-50 bg-white card px-[4rem] py-4 flex justify-between items-center">
      <div className="w-full m-auto flex items-center space-x-8">
        {showTitle && (
          <div className="hide">
            <Link className="font-serif text-2xl" href="/">
              STUDIO FORMA 96
            </Link>
          </div>
        )}
        {showIcons && (
          <>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaFacebookF />
            </Link>
            <Link href="/">
              <FaLinkedinIn />
            </Link>
          </>
        )}
      </div>
      <div className="flex space-x-4 items-center justify-center">
        <div className="relative bg-[#f4f4f4] rounded-[20px] px-3 items-center justify-around">
          <button
            className="text-xl focus:outline-none pt-[6px]"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {menuOpen && (
            <div className="absolute w-[30rem] right-[-11rem] mt-2 bg-white border rounded-lg shadow-lg">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 1
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 2
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 3
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 4
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 5
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <motion.button
            className="bg-gray-700 text-white px-4 py-1.5 rounded-[20px] flex items-center"
            whileTap={{ scale: 0.9 }}
          >
            Bookings
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
