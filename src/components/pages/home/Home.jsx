import React from "react";
import Navbar from "./Navbar";
import pic from "../../../assets/images/WhatsApp Image 2023-03-29 at 11.01.51 AM.jpeg";
import { motion } from "framer-motion";
import Name from "./svg/Name";
import resume from "../../../assets/resume/Pawan Saini (MERN Developer).pdf";
const Home = () => {
  return (
    <>
      <motion.div className="h-screen  main_home flex justify-start items-center">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.6, duration: 1.1 },
          }}
          className="relative flex flex-col sm:flex-row justify-start items-center sm:w-4/5    px-10 z-10 mx-auto home h-[80%] "
        >
          <div className=" basis-1/2 text-center sm:text-left   text-white  ">
            <motion.p className=" font-semibold text-2xl pb-1  ">
              Hi, my name is
            </motion.p>
            <h2 className="text-8xl  pt-2  pb-2 ">
              <Name />
            </h2>

            <p className="text-3xl  mt-7 p-3 home__para text-orange-50">
              MERN developer with a focus on Front End Development | Creating
              seamless web applications
            </p>

            <motion.div>
              <motion.a
                href={resume}
                download="pawan saini (MERN Developer)"
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
              </motion.a>
            </motion.div>
          </div>
          <div className=" basis-1/2 flex justify-end items-center relative   parent">
            <div className="flex justify-center items-center">
              <div className="blob"></div>
              <div className="h-52 w-52 rounded-full overflow-hidden  flex items-center justify-center  img__container ">
                <img src={pic} alt="" srcset="" className="" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
