import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({handleClick}) => {
    return (
      <>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#hero"
          onClick={handleClick}
        >
          Home
        </HashLink>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#about"
          onClick={handleClick}
        >
          About
        </HashLink>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#services"
          onClick={handleClick}
        >
          Amenities
        </HashLink>
        <HashLink
          className="px-4 font-extrabold text-gray-500 hover:text-blue-900"
          smooth
          to="/#portfolio"
          onClick={handleClick}
        >
          Portfolio
        </HashLink>
        <HashLink
          className="px-4 shadow-xl rounded-2xl bg-blue-900 hover:bg-blue-800 font-extrabold text-white px-6 py-3 "
          to="/contact#contact"
        >
          Contact Us
        </HashLink>
      </>
    );
}

export default NavLinks;
