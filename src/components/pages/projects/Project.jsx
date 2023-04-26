import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Data } from "../../../../public/Data/Data";
import { motion } from "framer-motion";
const Project = () => {
  const [data, setData] = useState(Data);
 const [sortOption, setSortOption] = useState("");

 const handleChange = (event) => {
   setSortOption(event.target.value);
 };


   
  
  return (
    <>
      <div className="projects  text-white p-10 ">
        <div className=" text-center ">
          <h1 className="main__heading text-4xl border-b-2 px-10 pb-2 inline-block">
            Projects
          </h1>
          <div className="mx-auto container    ">
            <motion.div
              className="grid grid-cols-3 grid-rows-2  w-full myGrid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              staggerChildren={50}
            >
              {data.map((item, i) => {
                return (
                  <motion.div key={i} whileHover={{scale:1.1}} class="flex justify-center flex-col items-center card ">
                    <div className="img__container--card">
                      <img src={item.img} alt="" srcset="" />
                    </div>
                    <div className="info w-full  h-full">
                      <div className="flex justify-between items-center w-4/5 mx-auto text-sm">
                        <button className=" p-2  bg-black">
                          {" "}
                          <a href={item.demo}>Demo</a>
                        </button>
                        <button className=" p-2  bg-black">
                          {" "}
                          <a href={item.source}> Source Code</a>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
