import React, { useState } from 'react'
import HamburgerIcon from './Hamburger';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="fixed navbar  w-52 h-screen flex flex-col justify-start  z-30 ">
        <div>
          <HamburgerIcon isOpen={isOpen} toggle={toggleMenu} />
          {/* your other app content */}
        </div>
        <ul>
          <li>
            <span>
              <i class="fa-solid fa-house"></i>
            </span>{" "}
            Home
          </li>
          <li>
            <span>
              <i class="fa-solid fa-user"></i>
            </span>{" "}
            About
          </li>
          <li>
            <span>
              <i class="fa-solid fa-gear"></i>
            </span>{" "}
            Projects
          </li>
          <li>
            <span>
              <i class="fa-brands fa-linkedin"></i>{" "}
            </span>{" "}
          </li>
          <li>
            <span>
              <i class="fa-brands fa-github"></i>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar