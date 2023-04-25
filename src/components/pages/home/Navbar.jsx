import React from 'react'

const Navbar = () => {
 
  return (
    <>
      
      <div
        className="fixed navbar w-screen  flex justify-center  top-0   z-30 "
      >
      
   
        <ul className="flex  justify-center">
          <li>
           
            Home
          </li>
          <li>
           
            About
          </li>
          <li>
          
            Projects
          </li>
         
        </ul>
      </div>
    </>
  );
}

export default Navbar