import pic from "../../../assets/images/WhatsApp Image 2023-03-29 at 11.01.51 AM.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import Name from "./svg/Name";
import resume from "../../../assets/resume/Pawan Saini (MERN Developer).pdf";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        className="h-screen  main_home flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, width: "0" }}
          animate={{
            opacity: 1,
            scale: 1,
            width: "85%",
            height: "80%",
            transition: {
              delay: 2.1,
              duration: 4,
            },
          }}
          style={{ opacity }}
          className="relative flex flex-col sm:flex-row justify-start items-center sm:w-4/5    px-10 z-10 mx-auto home h-[80%] "
        >
          <div className=" basis-1/2 text-center sm:text-left   text-white  ">
            <motion.p
              initial={{ y: "-10px", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 8, duration: 3 },
              }}
              className=" font-semibold text-2xl pb-1  "
            >
              <div>Hi, my name is</div>
            </motion.p>
            <h2 className="text-8xl  pt-2  pb-2 ">
              <Name />
            </h2>

            <motion.p
              initial={{ y: "1000", opacity: 0, scale: 1.3 }}
              animate={{
                y: "0",
                opacity: 1,
                scale: 1,

                transition: {
                  delay: 5,
                  duration: 2,
                  type: "spring",
                  stiffness: 10,
                },
              }}
              className="text-3xl  mt-7 p-3 home__para text-orange-50"
            >
              MERN developer with a focus on Front End Development | Creating
              seamless web applications
            </motion.p>

            <a href={resume} download="pawan saini (MERN Developer)">
              <motion.div
                animate={{ y: [-8, 20] }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                whileHover={{ scale: 1.1 }}
                className="btn p-5 mt-5 inline-block"
              >
                Download my Resume
              </motion.div>
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 2.5,
                duration: 2,
              },
            }}
            className=" basis-1/2 flex justify-end items-center relative   parent"
          >
            <div className="flex justify-center items-center">
              <div className="blob"></div>
              <div className="h-52 w-52 rounded-full overflow-hidden  flex items-center justify-center  img__container ">
                <img src={pic} alt="" className="" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
