import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="fixed navbar  w-52 h-screen flex flex-col  z-30 ">
        <ul>
          <li >Home</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar