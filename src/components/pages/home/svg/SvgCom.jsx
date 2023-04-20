import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import '../App.css'
const SvgCom = () => {
  const { scrollYProgress } = useScroll();
  console.log(scry);
  const scrollY = useSpring(scrollYProgress);
  const [animate, setanimate] = useState(1);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let val = latest * 1;
    setanimate(val + 1);
  });

  return (
    <>
      <div className=" absolute  bottom-0  w-full z-10 rotate-180  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            fill="#000"
            fill-opacity="1"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: animate }}
            transition={{ duration: .5 }}
            id="homeSvg"
            d="M0,32L48,64C96,96,192,160,288,202.7C384,245,480,267,576,234.7C672,203,768,117,864,101.3C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></motion.path>
        </svg>
      </div>
    </>
  );
};

export default SvgCom;
