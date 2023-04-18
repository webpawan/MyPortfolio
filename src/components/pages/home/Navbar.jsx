import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="w-sreen flex  h-14   justify-center items-center z-20 relative ">
        <div className="w-1/3 navbar  absolute h-full  flex items-center justify-center  text-white  p-5 ">
          <nav>
            <ul className="flex items-center">
              <li className="mx-5">Home</li>
              <li className="mx-5">About</li>
              <li className="mx-5">work</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar