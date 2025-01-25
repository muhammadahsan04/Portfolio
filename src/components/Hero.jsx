// import { motion } from "framer-motion";
// import React from "react";
// import { ComputersCanvas } from "./canvas";
// import { styles } from "../styles";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto">
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915eff]">Ahsan</span>
//           </h1>
//           <p
//             className={`${styles.heroSubText} !leading-6 !text-[17px] mt-2 text-white-100`}
//           >
//             A creative frontend developer
//             <br className="sm:block hidden" />
//             passionate about designing and building
//             <br className="sm:block hidden" /> user-friendly websites and
//             applications.
//           </p>
//         </div>
//       </div>
//       {/* <ComputersCanvas /> */}

//       <div className="absolute xs:bottom-3 bottom-20 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center item-start p-2">
//             <motion.dev
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import React from "react";
// import { styles } from "../styles";
// import profilepic from "../../src/assets/pic.png";

// const Hero = () => {
//   return (
//     <section className="relative w-full h-screen mx-auto max-md:mb-[80px]">
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
//       >

//         <div className="flex justify-between max-md:flex-col max-md:gap-8 max-lg:justify-around w-full flex-wrap  lg:flex-row max-md:items-center">

//        <div className="flex">
//        <div className="flex flex-col justify-start items-center mt-5 mr-2">
//           <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//           <div className="w-1 sm:h-70 h-60 violet-gradient" />
//         </div>
//           <div className="border-white flex flex-1 flex-col">
//             <h1 className={`${styles.heroHeadText} text-white`}>
//               Hi, I'm <span className="text-[#915eff]">Ahsan</span>
//             </h1>
//             <p
//               className={`${styles.heroSubText} !leading-6 mt-2 text-white-100`}
//             >
//               A creative frontend developer
//               <br className="sm:block hidden" />
//               passionate about designing and building
//               <br className="sm:block hidden" /> user-friendly websites and
//               applications.
//             </p>
//             <div className="flex gap-3 mt-12">
//               <button
//                 type="submit"
//                 className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
//               >
//                 <a href="../../public/Ahsan.pdf" download="Ahsan_Resume.pdf">
//                   Resume
//                 </a>
//               </button>
//               <button
//                 type="submit"
//                 className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
//               >
//                 <a href="#contact">Hire me</a>
//               </button>
//             </div>
//           </div>
//        </div>

//           <div className="relative flex justify-center items-center h-[360px] w-[360px] max-md:w-[260px] max-md:h-[260px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
//             {/* Decorative Animated Rings */}
//             <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
//             <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

//             {/* Profile Image */}
//             <img
//               src={profilepic}
//               alt="Profile"
//               className="z-10 rounded-full w-[320px] h-[320px] max-md:w-[220px] max-md:h-[220px] object-contain shadow-[#915eff] border"
//             />
//           </div>
//         </div>
//       </div>
//       {/* <ComputersCanvas /> */}

//       <div className="absolute bottom-8 w-full flex justify-center items-center z-10">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center item-start p-2">
//             <motion.dev
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-white mb-1"
//             />
//             {/* arrow icon  */}
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import React from "react";
// import { ChevronDown } from "lucide-react"; // Importing the arrow icon
import { styles } from "../styles";
import profilepic from "../../src/assets/pic.png";
import { BiChevronDown } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto max-md:mb-[80px]">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex justify-between max-md:flex-col max-md:gap-8 max-lg:justify-around w-full flex-wrap lg:flex-row max-md:items-center">
          <div className="flex">
            <div className="flex flex-col justify-start items-center mt-5 mr-2">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-70 h-60 violet-gradient" />
            </div>
            <div className="border-white flex flex-1 flex-col">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#915eff]">Ahsan</span>
              </h1>
              <p
                className={`${styles.heroSubText} !leading-6 mt-2 text-white-100`}
              >
                A creative frontend developer passionate&nbsp;
                <br className="sm:block hidden" />
                about designing and building
                <br className="sm:block hidden" />
                user-friendly websites and applications.
              </p>
              <div className="flex gap-3 mt-12">
                <button
                  type="submit"
                  className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
                >
                  <a href="../../public/Ahsan.pdf" download="Ahsan_Resume.pdf">
                    Resume
                  </a>
                </button>
                <button
                  type="submit"
                  className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
                >
                  <a href="#contact">Hire me</a>
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[360px] w-[360px] max-md:w-[260px] max-md:h-[260px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
            {/* Decorative Animated Rings */}
            <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
            <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

            {/* Profile Image */}
            <img
              src={profilepic}
              alt="Profile"
              className="z-10 rounded-full w-[320px] h-[320px] max-md:w-[220px] max-md:h-[220px] object-contain shadow-[#915eff]"
            />
          </div>
        </div>
      </div>
      {/* <ComputersCanvas /> */}

      <div className="absolute bottom-4 right-4 w-full flex justify-end items-center z-10">
        <a href="#about">
          <div className="w-[40px] h-[40px] rounded-3xl border-2 border-white flex justify-center items-center">
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
    </section>
  );
};

export default Hero;
