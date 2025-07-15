// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { styles } from "../styles";
// import profilepic from "../../src/assets/pic.png";
// import { BiChevronDown } from "react-icons/bi";

// const Hero = () => {
//   const [showArrow, setShowArrow] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Hide the arrow as soon as the user scrolls
//       setShowArrow(window.scrollY === 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <section className="relative w-full h-screen">
//       <div
//         className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
//       >
//         <div className="flex justify-between max-md:flex-col max-md:gap-0 max-lg:justify-around w-full flex-wrap lg:flex-row max-md:items-center">
//           <div className="flex">
//             <div className="flex flex-col justify-start items-center mt-5 mr-2">
//               <div className="w-5 h-5 rounded-full bg-[#915eff]" />
//               <div className="w-1 sm:h-70 h-60 violet-gradient" />
//             </div>
//             <div className="border-white flex flex-1 flex-col">
//               <h1 className={`${styles.heroHeadText} text-white`}>
//                 Hi, I'm <span className="text-[#915eff]">Ahsan</span>
//               </h1>
//               <p
//                 className={`${styles.heroSubText} !leading-6 mt-2 text-white-100`}
//               >
//                 A creative frontend developer passionate&nbsp;
//                 <br className="sm:block hidden" />
//                 about designing and building
//                 <br className="sm:block hidden" />
//                 user-friendly websites and applications.
//               </p>
//               <div className="flex gap-3 mt-6">
//                 <button
//                   type="submit"
//                   className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
//                 >
//                   <a
//                     href="/Muhammad-ahsan-resume.pdf"
//                     download="Ahsan_Resume.pdf"
//                   >
//                     Resume
//                   </a>
//                 </button>
//                 <button
//                   type="submit"
//                   className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px]"
//                 >
//                   <a href="#contact">Hire me</a>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="relative flex justify-center items-center h-[360px] w-[360px] max-md:w-[260px] max-md:h-[260px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
//             <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
//             <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

//             <img
//               src={profilepic}
//               alt="Profile"
//               className="z-10 border rounded-full w-[320px] h-[320px] max-md:w-[220px] max-md:h-[220px] object-contain shadow-[#915eff]"
//             />
//           </div>
//         </div>
//       </div>

//       {showArrow && (
//         <div className="absolute z-50">
//           <div className="fixed bottom-3 right-4 w-full flex justify-end items-center">
//             <a href="#about">
//               <div className="w-[40px] h-[40px] rounded-3xl border-2 border-white">
//                 <motion.div
//                   animate={{
//                     y: [0, 10, 0],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                     repeatType: "loop",
//                   }}
//                   className="flex flex-col items-center"
//                 >
//                   <BiChevronDown size={24} className="text-white mb-3" />
//                 </motion.div>
//               </div>
//             </a>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import profilepic from "../../src/assets/pic.png";
import { BiChevronDown } from "react-icons/bi";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the arrow as soon as the user scrolls
      setShowArrow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div
        className={`${styles.paddingX} w-full max-w-7xl mx-auto flex items-center justify-center min-h-[calc(100vh-120px)]`}
      >
        <div className="flex justify-between items-center w-full max-lg:flex-col max-lg:gap-8 max-lg:text-center">
          {/* Left Content Section */}
          <div className="flex flex-1 max-lg:order-2">
            <div className="flex flex-col justify-center items-center mt-5 mr-2 max-lg:hidden">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-70 h-60 violet-gradient" />
            </div>
            <div className="flex flex-1 flex-col justify-center max-lg:items-center">
              <h1 className={`${styles.heroHeadText} text-white max-lg:text-center`}>
                Hi, I'm <span className="text-[#915eff]">Ahsan</span>
              </h1>
              <p
                className={`${styles.heroSubText} !leading-6 mt-2 text-white-100 max-lg:text-center max-sm:text-sm`}
              >
                A creative frontend developer passionate&nbsp;
                <br className="sm:block hidden max-lg:hidden" />
                about designing and building
                <br className="sm:block hidden max-lg:hidden" />
                user-friendly websites and applications.
              </p>

              {/* <button
                  type="button"
                  className="hover:bg-[#1e1746] bg-gradient-to-r from-[#7145d1] to-[#5d1eca] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px] max-sm:w-full max-sm:text-center"
                >
                  <a
                    href="/Muhammad-ahsan-resume.pdf"
                    download="Ahsan_Resume.pdf"
                    className="block w-full h-full"
                  >
                    Resume
                  </a>
                </button>
                <button
                  type="button"
                  className="hover:bg-[#1e1746] bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px] max-sm:w-full max-sm:text-center"
                >
                  <a href="#contact" className="block w-full h-full">Hire me</a>
                </button> */}

              {/* <div className="flex gap-3 mt-6 max-sm:flex-col max-sm:items-center max-lg:justify-center">
                <button
                  type="button"
                  className="hover:bg-[#1e1746] bg-gradient-to-r from-[#7145d1] to-[#5d1eca] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300 ease-in-out xs:text-[14px] text-[11px] max-sm:w-full max-sm:text-center"
                >
                  <a
                    href="/Muhammad-ahsan-resume.pdf"
                    download="Ahsan_Resume.pdf"
                    className="w-full h-full flex items-center"
                  >
                    Resume
                  </a>
                </button>

                <div className="gradient-border">
                  <div className="gradient-border-inner bg-tertiary py-3 px-6">
                    <a href="#contact" className="block w-full h-full">Hire me</a>
                  </div>
                </div>
              </div> */}

              {/* <div className="flex gap-3 mt-6">
                <div className="relative group cursor-pointer">
                  <div className="bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-xl transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 group-hover:shadow-lg group-hover:shadow-[#915eff]/50">
                    <button
                      type="button"
                      className="relative bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-xl overflow-hidden py-3 px-8 w-fit text-white font-bold transition-all duration-300 group-hover:from-[#a855f7] group-hover:to-[#8b5cf6] xs:text-[14px] text-[11px]"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                      <a
                        href="/Muhammad-ahsan-resume.pdf"
                        download="Ahsan_Resume.pdf"
                        className="relative z-10 block w-full h-full border"
                      >
                        Resume
                      </a>
                    </button>
                  </div>
                </div>

                <div className="relative group cursor-pointer">
                  <div className="bg-gradient-to-r from-[#7145d1] to-[#5d1eca] p-[1px] rounded-xl transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 group-hover:shadow-lg group-hover:shadow-[#7145d1]/50">
                    <button
                      type="button"
                      className="relative bg-tertiary rounded-xl overflow-hidden py-3 px-8 w-fit text-white font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#7145d1]/10 group-hover:to-[#5d1eca]/10 xs:text-[14px] text-[11px]"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                      <a href="#contact" className="relative z-10 block w-full h-full border">
                        Hire me
                      </a>
                    </button>
                  </div>
                </div>
              </div> */}

              <div className="flex gap-3 mt-6">
                {/* Resume Button - With Background */}
                <div className="relative group cursor-pointer">
                  <div className="bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-xl transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 group-hover:shadow-lg group-hover:shadow-[#915eff]/50">
                    <a
                      href="/Muhammad-ahsan-resume.pdf"
                      download="Ahsan_Resume.pdf"
                      className="relative bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-xl overflow-hidden py-3 px-8 w-fit text-white font-bold transition-all duration-300 group-hover:from-[#a855f7] group-hover:to-[#8b5cf6] xs:text-[14px] text-[11px] block"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                      <span className="relative z-10">Resume</span>
                    </a>
                  </div>
                </div>

                {/* Hire Me Button - With Border Only */}
                <div className="relative group cursor-pointer">
                  <div className="bg-gradient-to-r from-[#7145d1] to-[#5d1eca] p-[1px] rounded-xl transform transition-all duration-300 group-hover:scale-105 group-active:scale-95 group-hover:shadow-lg group-hover:shadow-[#7145d1]/50">
                    <a
                      href="#contact"
                      className="relative bg-tertiary rounded-xl overflow-hidden py-3 px-8 w-fit text-white font-bold transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#7145d1]/10 group-hover:to-[#5d1eca]/10 xs:text-[14px] text-[11px] block"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                      <span className="relative z-10">Hire me</span>
                    </a>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Right Profile Image Section */}
          <div className="flex justify-center items-center flex-shrink-0 max-lg:order-1">
            {/* <div className="relative flex justify-center items-center h-[360px] w-[360px] max-md:w-[280px] max-md:h-[280px] max-sm:w-[240px] max-sm:h-[240px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
              <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
              <div className="absolute h-[300px] w-[300px] max-md:h-[240px] max-md:w-[240px] max-sm:h-[200px] max-sm:w-[200px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

              <img
                src={profilepic}
                alt="Profile"
                className="z-10 rounded-full w-[320px] h-[320px] max-md:w-[240px] max-md:h-[240px] max-sm:w-[200px] max-sm:h-[200px] object-cover shadow-[#915eff]"
              />
            </div> */}


            {/* this is good */}
            {/* <div className="relative flex justify-center items-center h-[280px] w-[280px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
              <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
              <div className="absolute h-[220px] w-[220px] max-md:h-[160px] max-md:w-[160px] max-sm:h-[140px] max-sm:w-[140px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

              <img
                src={profilepic}
                alt="Profile"
                className="z-10 rounded-full w-[240px] h-[240px] max-md:w-[180px] max-md:h-[180px] max-sm:w-[160px] max-sm:h-[160px] object-contain shadow-[#915eff]"
              />
            </div> */}


            <div className="relative flex justify-center items-center h-[280px] w-[280px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px] bg-gradient-to-r from-[#1e1746] to-[#151030] rounded-full shadow-lg shadow-[#915eff]/30">
              <div className="absolute h-full w-full rounded-full bg-gradient-to-r from-[#915eff]/40 to-[#1e1746]/10 animate-pulse" />
              <div className="absolute h-[220px] w-[220px] max-md:h-[160px] max-md:w-[160px] max-sm:h-[140px] max-sm:w-[140px] rounded-full border-2 border-[#915eff]/50 blur-lg" />

              <img
                src={profilepic}
                alt="Profile"
                className="z-10 rounded-full w-[240px] h-[240px] max-md:w-[180px] max-md:h-[180px] max-sm:w-[160px] max-sm:h-[160px] object-contain shadow-[#915eff]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      {showArrow && (
        // <div className="absolute bottom-4 right-4 z-50">
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-50">
          <a href="#about">
            <div className="w-[40px] h-[40px] rounded-3xl border-2 border-white flex items-center justify-center hover:bg-white/10 transition-all duration-300">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex items-center justify-center"
              >
                <BiChevronDown size={24} className="text-white" />
              </motion.div>
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

// export default Hero;

export default SectionWrapper(Hero, "home");