// import { motion } from "framer-motion";
// import React from "react";
// import { Tilt } from "react-tilt";
// import { styles } from "../styles";
// import { github } from "../assets";
// import { SectionWrapper } from "../hoc";
// import { projects } from "../contstants";
// import { fadeIn, textVariant } from "../utils/motion";
// import { demo } from "../assets";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   live_link,
// }) => {
//   return (
//     <>
//       <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//         <Tilt
//           options={{
//             max: 45,
//             scale: 1,
//             speed: 450,
//           }}
//           className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//         >
//           <div className="relative w-full h-[170px]">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-full object-cover rounded-2xl"
//             />
//             <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//               <div
//                 onClick={() => window.open(live_link, "_blank")}
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src={demo}
//                   alt="demo"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//               <div
//                 onClick={() => window.open(source_code_link, "_blank")}
//                 className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <img
//                   src={github}
//                   alt="github"
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="mt-5">
//             <h3 className="text-white font-bold text-[24px]">{name}</h3>
//             <p className="mt-2 text-secondary text-[14px]">{description}</p>
//           </div>

//           <div className="mt-4 flex flex-wrap gap-2">
//             {tags.map((tag) => (
//               <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//                 #{tag.name}
//               </p>
//             ))}
//           </div>
//         </Tilt>
//       </motion.div>
//     </>
//   );
// };
// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>My Work</p>
//         <h2 className={`${styles.sectionHeadText}`}>Project</h2>
//       </motion.div>

//       <div className="flex w-full">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code reppsitories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard {...project} key={`project-${index}`} index={index} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");

import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../contstants";
import { fadeIn, textVariant } from "../utils/motion";
import { demo } from "../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                {/* <img
                  src={demo}
                  alt="demo"
                  className="w-1/2 h-1/2 object-contain"
                /> */}

                <FaExternalLinkAlt />
              </div>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Project</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary max-w-3xl leading-[22px] xs:text-[17px] xs:leading-[25px] sm:text-[17px] sm:leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code reppsitories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={`project-${index}`} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
