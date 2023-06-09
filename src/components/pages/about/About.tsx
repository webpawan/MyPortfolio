import "./about.css";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

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
      <div className="flex  items-center justify-center about h-screen overflow-hidden  text-white sm:px-28  ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, delay: 1, stiffness: 100 },
          }}
          className="flex flex-col sm:flex-row items-center justify-between"
        >
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{
              y: 0,
              transition: { type: "spring", stiffness: 100, duration: 1 },
            }}
            className="basis-1/2 bg h-[80vh]  sm:h-[65vh] text-center"
          >
            <div className="flex justify-center items-center  ">
              <h1 className="text-xl  sm:text-4xl px-5 text-center inline-block justify-center  border-b-2">
                About{" "}
              </h1>
            </div>
            <p className="pt-5  text-base font-light sm:font-normal sm:text-xl sm:leading-10 p-[2rem] ">
              As a self-taught programmer, I am a dedicated and motivated
              individual with a passion for coding and software development. A
              strong background in React JS (Front-end Development) and Basic
              knowledge in backend technologies such as Express JS, MongoDB, and
              Node JS also i can create RESTful APIs with MVC architecture .I
              have a strong ability to learn new programming concepts quickly,
              and I am committed to staying up-to-date with the latest
              technologies.
            </p>
          </motion.div>
          <div className="basis-1/2  h-fit">
            <div className="title flex flex-col h-fit justify-center items-center">
              <h1 className="text-3xl px-10   border-b-2">skills </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                }}
                className=" sm:h-[60vh] sm:w-full sm:relative sm:overflow-hidden "
              >
                {items.map((icon, index) => {
                  return (
                    <motion.div
                      className=" sm:h-[85%] sm:w-[10%] sm:absolute sm:top-[5%] right-0 "
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
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 1 },
                        }}
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
                      className="
                      sm:h-[85%] sm:w-[10%] sm:absolute sm:top-[5%] sm:left-0 
                      "
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
                        whileInView={{
                          opacity: 1,
                          transition: { duration: 1 },
                        }}
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
        </motion.div>
      </div>
    </>
  );
};

export default About;
