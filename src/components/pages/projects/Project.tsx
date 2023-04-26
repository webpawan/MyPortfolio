import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

 const Data = [
   {
     id: 1,
     name: "Chat Application",
     img: "/img/whatsapss.png",
     demo: "https://main--chatappclone01.netlify.app/",
     source: "https://github.com/webpawan/whatsApp-Clone",
     type: "mern",
   },
   {
     id: 2,
     name: "e-commerce (Reactjs) ",
     img: "/img/e-commerce-reaxtjs.png",
     demo: "https://fashion-e-commerce-site.netlify.app/",
     source: "https://github.com/webpawan/react-e-commerce-clothing-website",
     type: "react",
   },
   {
     id: 3,
     name: "Movie Rating",
     img: "/img/movie.png",
     demo: "https://moviedetailsimdb.netlify.app/",
     source: "https://github.com/webpawan/Movie-App-onlyShowData-Redux-toolkit",
     type: "react",
   },
   {
     id: 4,
     name: "e-commerce (Javaript)",
     img: "/img/e-commerce-js.png",
     demo: "https://e-commerce-shoesfly.netlify.app/",
     source:
       "https://github.com/webpawan/E-commerce-only--vanila.js-ES6-responsive",
     type: "js",
   },
   {
     id: 5,
     name: "Weather (React js)",
     img: "/img/Screenshot (8).png",
     demo: "https://react-weather-app-level-2.netlify.app/",
     source: "https://github.com/webpawan/weather-app-level-2-with-react-js-",
     type: "react",
   },
   {
     id: 6,
     name: "Note",
     img: "/img/note.png",
     demo: "https://note-saver-react.netlify.app/",
     source: "https://github.com/webpawan/Note-saver-App",
     type: "react",
   },

   {
     id: 11,
     name: "Typing App",
     img: "/img/Typing.png",
     demo: "https://typing-pro.netlify.app/",
     source: "https://github.com/webpawan/TYPING-PRO",
     type: "js",
   },
   {
     id: 12,
     name: "Crypto App",
     img: "/img/crypto.png",
     demo: "https://cryptojagat.netlify.app/",
     source: "https://github.com/webpawan/crpto_Info",
     type: "react",
   },
   {
     id: 13,
     name: "Snake Game",
     img: "/img/snakeGame.png",
     demo: "https://snake-game-001.netlify.app/",
     source: "https://github.com/webpawan/Snake-Game-with-JavaScript",
     type: "js",
   },
   {
     id: 7,
     name: "SignInForm",
     img: "/img/Singin.png",
     demo: "https://form-es6.netlify.app/",
     source: "https://github.com/webpawan/form-validation",
     type: "js",
   },
   {
     id: 8,
     name: "Tic Tac Toe",
     img: "/img/tic tac toe.png",
     demo: "https://tic-tac-toe-game-es6.netlify.app/",
     source: "https://github.com/webpawan/TIC-TAC-TOE",
     type: "js",
   },
   {
     id: 10,
     name: "Weather (Javascript)",
     img: "/img/weather Js.png",
     demo: "https://weatherapp-js-with-map.netlify.app/",
     source: "https://github.com/webpawan/weather-level-1-just-java-script-",
     type: "js",
   },
 ]; 

const Project = () => {
  const [data, setData] = useState(Data);
 const [sortOption, setSortOption] = useState("");

 const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
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
             
            >
              {data.map((item: { img: string | undefined; demo: string | undefined; source: string | undefined; }, i: React.Key | null | undefined) => {
                return (
                  <motion.div key={i} whileHover={{scale:1.1}} className="flex justify-center flex-col items-center card ">
                    <div className="img__container--card">
                      <img src={item.img} alt="" />
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
