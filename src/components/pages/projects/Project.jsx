import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Data } from "../../../../public/Data/Data";

const Project = () => {
  const [data, setData] = useState(Data);
 const [sortOption, setSortOption] = useState("");

 const handleChange = (event) => {
   setSortOption(event.target.value);
 };

 useEffect(()=>{
const sortedData = data.slice().sort((a, b) => {
  if (sortOption === "Front-End") {
    return a.type.localeCompare(b.type);
  } else if (sortOption === "MERN") {
    return a.type.localeCompare(b.type);
  } else if (sortOption === "HTML , CSS & JavaScript") {
    return a.type.localeCompare(b.type);
  }
});
setData(sortedData)
 },[handleChange])

   
  
  return (
    <div className="projects  text-white p-10 ">
      <div className=" text-center ">
        <h1 className="main__heading text-4xl border-b-2 px-10 pb-2 inline-block">
          Projects
        </h1>
        <div className="mx-auto container    ">
          {/* <div className="flex flex-col justify-start items-start w-4/5 mx-auto text-sm">
            <label
              for="tech"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select an option
            </label>
            <select
              id="tech"
              className="  bg-black border-0  border-b-2 py-2 mt-2 mb-20 focus:border-red-2"
              value={sortOption}
              onChange={handleChange}
            >
              <option>Choose </option>

              <option>Front-End</option>
              <option>MERN</option>
              <option>HTML , CSS & JavaScript</option>
            </select>
          </div> */}
          <div className="grid grid-cols-3 grid-rows-2  w-full myGrid">
            {data.map((item, i) => {
              return (
                <div class="flex justify-center flex-col items-center card ">
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
