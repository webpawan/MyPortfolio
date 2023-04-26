import { useEffect, useState } from "react";
import About from "./components/pages/about/About";
import Home from "./components/pages/home/Home";
import Project from "./components/pages/projects/Project";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate website loading delay
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  if(!isReady){
    return <h1 className="flex justify-center items-center h-screen w-screen text-lg">loading...</h1>
  }

  return (
    <div>
    
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
