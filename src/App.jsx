import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Feedbacks,
  Experience,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  Hero,
} from "./components";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <div className="absolute h-screen z-50">
          <div className="fixed bottom-3 right-4 w-full flex justify-end items-center">
            <a href="#about">
              <div className="w-[40px] h-[40px] rounded-3xl border-2 border-white">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="flex flex-col items-center"
                >
                  <BiChevronDown size={24} className="text-white mb-3" />
                </motion.div>
              </div>
            </a>
          </div>
        </div> */}
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
