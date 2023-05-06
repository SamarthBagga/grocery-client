import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <nav className="h-[4rem] text-gray-700 w-full z-10">
      <div className="max-w-7xl w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link legacyBehavior href="/">
              <span>
              <a className="flex-shrink-0 title">
                Stuff
              </a>
              </span>
            </Link>
            <div className="ml-[10vw] hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className=" px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className=" px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <div className="relative">
                  <button
                    onClick={handleDropdownClick}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${showDropdown ? 'text-yellow-200' : ''}`}
                  >
                    Services
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full left-0 z-50 bg-gray-800 py-2">
                      <Link href="/Mentor" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Mentorship</Link>
                      <Link href="/Recruit" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Recruitment</Link>
                    </div>
                  )}
                </div>                
                <Link href="/login" className='sellButton text-sm py-1 px-2'>Sell Stuff</Link>
              </div>
            </div>
          </div>
          <div className="-mr-1 flex md:hidden">
          <button className='sellButton text-sm py-1 px-2'>Sell Stuff</button>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              
              <FontAwesomeIcon icon={faBars} />
              
              
            </button>
          </div>
        </div>
      </div>
      <div className={`${showMenu ? "block" : "hidden"} md:hidden absolute w-full top-0 left-0 z-50`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-gray-300">
        <button
  onClick={() => setShowMenu(false)}
  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>

          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Home</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">About</Link>
          <div className="relative">
                  <button
                    onClick={handleDropdownClick}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
                    className={` px-3 py-2 rounded-md text-sm font-medium ${showDropdown ? 'text-yellow-200' : ''}`}
                  >
                    Services
                  </button>
                  {showDropdown && (
                    <div className="absolute top-full left-0 z-5 py-2">
                      <Link href="/Mentor" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Mentorship</Link>
                      <Link href="/Recruit" className="block px-3 py-2 rounded-md text-base font-medium hover:text-white hover:bg-gray-700">Recruitment</Link>
                    </div>
                  )}
                </div>          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
