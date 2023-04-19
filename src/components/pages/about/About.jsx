import React from "react";
import "./about.css";
import { motion } from "framer-motion";

const items = [
  {
    url: "https://img.icons8.com/color/48/null/html-5--v1.png",
  },
  {
    url: "https://img.icons8.com/fluency/48/null/css3.png",
  },
  {
    url: "https://img.icons8.com/fluency/48/null/javascript.png",
  },
  {
    url: "https://img.icons8.com/color/48/null/bootstrap.png",
  },
  {
    url: "https://img.icons8.com/color/48/null/tailwindcss.png",
  },
  {
    url: "https://img.icons8.com/officel/80/null/react.png",
  },
  {
    url: "https://img.icons8.com/color/48/null/nodejs.png",
  },

  { url: "https://img.icons8.com/ios/100/000000/express-js.png" },
  { url: "https://img.icons8.com/color/48/null/mongodb.png" },
  { url: "https://img.icons8.com/color/96/null/mongoose.png" },
  { url: "https://img.icons8.com/color/48/null/java-web-token.png" },
  {
    url: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/000000/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-bold-tal-revivo.png",
  },
  {
    url: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/null/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  },
  { url: "https://img.icons8.com/color/48/null/figma--v1.png" },
  { url: "https://img.icons8.com/color/48/null/redux.png" },
  {
    url: "https://img.icons8.com/windows/64/000000/github.png",
  },
];
const items_name = [
  {
    name: "Html5",
  },
  {
    name: "CSS3",
  },
  {
    name: "Java Script(ES6)",
  },
  {
    name: "Bootstrap5",
  },
  {
    name: "Tailwind Css",
  },

  {
    name: "ReactJS",
  },
  {
    name: "Node Js",
  },
  {
    name: "Espress-js",
  },
  {
    name: "MongoDB",
  },
  { name: "Mongoose" },
  {
    name: "JWT",
  },
  {
    name: "Framer-motion (Animation library)",
  },
  {
    name: "PostMan",
  },
  {
    name: "Figma",
  },

  {
    name: "Redux Toolkit",
  },
  {
    name: "GithHub",
  },
];

const About = () => {
  return (
    <>
      <div className="flex items-top justify-center about h-screen overflow-hidden bg-black text-white  pt-28 px-28 ">
        <div className="basis-1/2  ">
          <h1 className="text-3xl about w-1/2 border-b-2">About </h1>
          <p className="pt-5 w-[75%] font-light text-base leading-8">
            As a self-taught programmer, I am a dedicated and motivated
            individual with a passion for coding and software development. A
            strong background in React JS (Front-end Development) and Basic
            knowledge in backend technologies such as Express JS, MongoDB, and
            Node JS also i can create RESTful APIs with MVC architecture .I have a strong ability to learn new programming
            concepts quickly, and I am committed to staying up-to-date with the
            latest technologies.
          </p>
        </div>
        <div className="basis-1/2  ">
          <div className="title flex flex-col justify-center items-center">
            <h1 className="text-3xl px-10 about  border-b-2">skills </h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
              }}
              className="myWheel"
            >
              {items.map((icon, index) => {
                return (
                  <motion.div
                    className="wheel__tech"
                    key={index}
                    initial="intial"
                    animate={["animate", "intialHide"]}
                    variants={{
                      initial: {
                        opacity: 0,
                      },
                      intialHide: {
                        opacity: 1,
                        transition: {
                          delay: index + 1,
                        },
                      },
                      animate: {
                        rotate: -360,
                        transition: {
                          duration: items.length,
                          repeat: Infinity,
                          delay: index + 1,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <motion.div
                      whileInView={{ opacity: 1, transition: { duration: 1 } }}
                      initial={{ opacity: 0 }}
                      className="img__containr"
                    >
                      <img
                        src={icon.url}
                        className=""
                        style={{ backgroundColor: "white", width: "50px" }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
              {items_name.map((item, index) => {
                return (
                  <motion.div
                    className="wheel__tech--left"
                    key={index}
                    initial="intial"
                    animate={["animate", "intialHide"]}
                    variants={{
                      initial: {
                        opacity: 0,
                      },
                      intialHide: {
                        opacity: 1,
                        transition: {
                          delay: index + 1,
                        },
                      },
                      animate: {
                        rotate: 360,
                        transition: {
                          duration: items_name.length,
                          repeat: Infinity,
                          delay: index + 1,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <motion.div
                      whileInView={{ opacity: 1, transition: { duration: 1 } }}
                      initial={{ opacity: 0 }}
                      className="item_name"
                    >
                      <p>{item.name}</p>
                    </motion.div>
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

export default About;
