import React from 'react'
import Navbar from './Navbar';
import  pic  from "../../../assets/images/WhatsApp Image 2023-03-29 at 11.01.51 AM.jpeg";
import { motion } from "framer-motion";
import SvgCom from './svg/SvgCom';
import Name from './svg/Name';

const Home = () => {
  
  return (
    <>
      <div className="h-screen  main_home  ">
        <Navbar />

        <div className="relative flex justify-between items-center w-4/5  px-10 mt-4 z-10 mx-auto home h-[85%]">
          <div className=" basis-1/2     text-white  ">
            <motion.p className=" font-semibold text-2xl pb-1  ">
              Hi, my name is
            </motion.p>
            <h2 className="text-8xl  pt-2  pb-2 ">
              <Name />
            </h2>

            <p className="text-3xl  mt-7 p-3 home__para">
              MERN developer with a focus on user experience | Creating seamless
              web applications
            </p>

            <motion.div>
              <motion.button
                animate={{ y: [-8, 20] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="mt-10 p-5 btn "
              >
                Download my Resume
              </motion.button>
            </motion.div>
          </div>
          <div className=" basis-1/2 flex justify-end items-center relative   parent">
            <div className="flex justify-center items-center">
              <div className="blob"></div>
              <div className="h-52 w-52 rounded-full overflow-hidden  flex items-center justify-center  img__container ">
                <img src={pic} alt="" srcset="" className=''/>
              </div>
            </div>
          </div>
        </div>

        {/* ------------svg----------- */}
        <SvgCom />
      </div>
    </>
  );
}

export default Home


