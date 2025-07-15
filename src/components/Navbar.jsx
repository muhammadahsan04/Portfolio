// import React, { useEffect, useState } from "react";
// import { styles } from "../styles";
// import { logo, menu, close } from "../assets";
// import { navLinks } from "../contstants";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font bold cursor-pointer flex">
//             Ahsan
//             {/* &nbsp;
//             <span className="sm:block hidden text-white">| Javascript Mastery</span> */}
//           </p>
//         </Link>

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             <li
//               className={`${
//                 active === link.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               key={link.id}
//               onClick={() => setActive(link.title)}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={menu}
//             className="w-[28px] h-[28px] object-contain cursor-pointer"
//             alt=""
//             onClick={() => setToggle(!toggle)}
//           />
//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end item-start flex-col gap-4">
//               {navLinks.map((link) => (
//                 <li
//                   className={`${
//                     active === link.title ? "text-white" : "text-secondary"
//                   } font-Poppins font-medium cursor-pointer text-[16px]`}
//                   key={link.id}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(link.title);
//                   }}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { styles } from "../styles";
// import { logo, menu, close } from "../assets";
// import { navLinks } from "../contstants";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const navRef = useRef(null);

//   // Function to handle smooth scrolling and set active state
//   const handleNavClick = (id, title, event) => {
//     event.preventDefault();
//     setActive(title);
//     updateIndicator(event.currentTarget);

//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Update slider indicator position
//   const updateIndicator = (activeElement) => {
//     if (activeElement && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const activeRect = activeElement.getBoundingClientRect();

//       setIndicatorStyle({
//         width: activeRect.width,
//         left: activeRect.left - navRect.left,
//       });
//     }
//   };

//   // Function to determine active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navLinks.map(link => document.getElementById(link.id));
//       const scrollPosition = window.scrollY + 100;

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         if (section && section.offsetTop <= scrollPosition) {
//           setActive(navLinks[i].title);
//           // Update indicator for the active nav item
//           const activeNavItem = navRef.current?.querySelector(`[data-nav="${navLinks[i].title}"]`);
//           if (activeNavItem) {
//             updateIndicator(activeNavItem);
//           }
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Initialize indicator position
//   useEffect(() => {
//     if (active && navRef.current) {
//       const activeNavItem = navRef.current.querySelector(`[data-nav="${active}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }
//   }, [active]);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/90 backdrop-blur-md border-b border-white/10`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 z-10"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer">
//             Ahsan
//           </p>
//         </Link>

//         {/* Centered Desktop Navigation */}
//         <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
//           <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
//             <ul ref={navRef} className="list-none flex flex-row relative">
//               {/* Animated Background Slider */}
//               <div
//                 className="absolute top-1 bottom-1 bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-full transition-all duration-300 ease-out shadow-lg"
//                 style={{
//                   width: indicatorStyle.width || 0,
//                   left: indicatorStyle.left || 0,
//                 }}
//               />

//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="relative z-10"
//                 >
//                   <a
//                     href={`#${link.id}`}
//                     data-nav={link.title}
//                     className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full ${active === link.title
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => handleNavClick(link.id, link.title, e)}
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
//             onClick={() => setToggle(!toggle)}
//           >
//             <img
//               src={toggle ? close : menu}
//               className="w-6 h-6 object-contain"
//               alt="menu"
//             />
//           </button>

//           {/* Mobile Menu */}
//           <div
//             className={`${!toggle
//                 ? "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
//                 : "opacity-100 scale-100 translate-y-0"
//               } absolute top-16 right-4 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out min-w-[200px]`}
//           >
//             <ul className="list-none flex flex-col p-2">
//               {navLinks.map((link, index) => (
//                 <li key={link.id}>
//                   <a
//                     href={`#${link.id}`}
//                     className={`relative block px-4 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 ${active === link.title
//                         ? "text-white bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20 border-l-2 border-[#915eff]"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => {
//                       handleNavClick(link.id, link.title, e);
//                       setToggle(false);
//                     }}
//                   >
//                     {link.title}
//                     {active === link.title && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#915eff] rounded-full animate-pulse" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { styles } from "../styles";
// import { logo, menu, close } from "../assets";
// import { navLinks } from "../contstants";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const navRef = useRef(null);

//   // Function to handle smooth scrolling and set active state
//   const handleNavClick = (id, title, event) => {
//     event.preventDefault();
//     setActive(title);

//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Update indicator after a small delay to ensure DOM is ready
//     setTimeout(() => {
//       const activeNavItem = navRef.current?.querySelector(`[data-nav="${title}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }, 100);
//   };

//   // Update slider indicator position
//   const updateIndicator = (activeElement) => {
//     if (activeElement && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const activeRect = activeElement.getBoundingClientRect();

//       setIndicatorStyle({
//         width: activeRect.width,
//         left: activeRect.left - navRect.left,
//       });
//     }
//   };

//   // Function to determine active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);
//       const scrollPosition = window.scrollY + 200; // Increased offset for better detection

//       let currentActive = "";

//       // Check each section
//       for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;
//         const sectionBottom = sectionTop + sectionHeight;

//         // If we're in this section
//         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//           currentActive = navLinks[i].title;
//           break;
//         }
//       }

//       // If no section is found, check if we're at the very top
//       if (!currentActive && window.scrollY < 100) {
//         currentActive = navLinks[0]?.title || "";
//       }

//       // If no section is found and we're at the bottom, use the last section
//       if (!currentActive && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
//         currentActive = navLinks[navLinks.length - 1]?.title || "";
//       }

//       // Only update if the active section has changed
//       if (currentActive && currentActive !== active) {
//         setActive(currentActive);
//       }
//     };

//     // Initial call to set active section
//     handleScroll();

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [active]); // Add active as dependency

//   // Update indicator when active changes
//   useEffect(() => {
//     if (active && navRef.current) {
//       const activeNavItem = navRef.current.querySelector(`[data-nav="${active}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }
//   }, [active]);

//   // Initialize indicator on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (navLinks.length > 0) {
//         const firstSection = navLinks[0].title;
//         setActive(firstSection);
//       }
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/90 backdrop-blur-md border-b border-white/10`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 z-10"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer">
//             Ahsan
//           </p>
//         </Link>

//         {/* Centered Desktop Navigation */}
//         <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
//           <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
//             <ul ref={navRef} className="list-none flex flex-row relative">
//               {/* Animated Background Slider */}
//               <div
//                 className="absolute top-1 bottom-1 bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-full transition-all duration-300 ease-out shadow-lg"
//                 style={{
//                   width: indicatorStyle.width || 0,
//                   left: indicatorStyle.left || 0,
//                   opacity: indicatorStyle.width ? 1 : 0,
//                 }}
//               />

//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="relative z-10"
//                 >
//                   <a
//                     href={`#${link.id}`}
//                     data-nav={link.title}
//                     className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full ${active === link.title
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => handleNavClick(link.id, link.title, e)}
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
//             onClick={() => setToggle(!toggle)}
//           >
//             <img
//               src={toggle ? close : menu}
//               className="w-6 h-6 object-contain"
//               alt="menu"
//             />
//           </button>

//           {/* Mobile Menu */}
//           <div
//             className={`${!toggle
//                 ? "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
//                 : "opacity-100 scale-100 translate-y-0"
//               } absolute top-16 right-4 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out min-w-[200px]`}
//           >
//             <ul className="list-none flex flex-col p-2">
//               {navLinks.map((link, index) => (
//                 <li key={link.id}>
//                   <a
//                     href={`#${link.id}`}
//                     className={`relative block px-4 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 ${active === link.title
//                         ? "text-white bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20 border-l-2 border-[#915eff]"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => {
//                       handleNavClick(link.id, link.title, e);
//                       setToggle(false);
//                     }}
//                   >
//                     {link.title}
//                     {active === link.title && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#915eff] rounded-full animate-pulse" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useEffect, useState, useRef } from "react";
// import { styles } from "../styles";
// import { logo, menu, close } from "../assets";
// import { navLinks } from "../contstants";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const navRef = useRef(null);

//   // Function to handle smooth scrolling and set active state
//   const handleNavClick = (id, title, event) => {
//     event.preventDefault();
//     setActive(title);

//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Update indicator after a small delay to ensure DOM is ready
//     setTimeout(() => {
//       const activeNavItem = navRef.current?.querySelector(`[data-nav="${title}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }, 100);
//   };

//   // Update slider indicator position
//   const updateIndicator = (activeElement) => {
//     if (activeElement && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const activeRect = activeElement.getBoundingClientRect();

//       setIndicatorStyle({
//         width: activeRect.width,
//         left: activeRect.left - navRect.left,
//       });
//     }
//   };

//   // Function to determine active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       // Check if we're at the very top
//       if (scrollPosition < 100) {
//         if (active !== navLinks[0].title) {
//           setActive(navLinks[0].title);
//         }
//         return;
//       }

//       // Check if we're at the very bottom
//       if (scrollPosition + windowHeight >= documentHeight - 50) {
//         if (active !== navLinks[navLinks.length - 1].title) {
//           setActive(navLinks[navLinks.length - 1].title);
//         }
//         return;
//       }

//       // Find the current section
//       let currentSection = "";
//       const offset = 150; // Adjust this value based on your navbar height

//       for (let i = 0; i < navLinks.length; i++) {
//         const section = document.getElementById(navLinks[i].id);
//         if (section) {
//           const sectionTop = section.offsetTop - offset;
//           const sectionBottom = sectionTop + section.offsetHeight;

//           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             currentSection = navLinks[i].title;
//             break;
//           }
//         }
//       }

//       // If no section found, find the closest one
//       if (!currentSection) {
//         let closestSection = navLinks[0].title;
//         let closestDistance = Infinity;

//         navLinks.forEach((link) => {
//           const section = document.getElementById(link.id);
//           if (section) {
//             const sectionTop = section.offsetTop - offset;
//             const distance = Math.abs(scrollPosition - sectionTop);

//             if (distance < closestDistance) {
//               closestDistance = distance;
//               closestSection = link.title;
//             }
//           }
//         });

//         currentSection = closestSection;
//       }

//       // Update active state if it changed
//       if (currentSection && currentSection !== active) {
//         setActive(currentSection);
//       }
//     };

//     // Throttle scroll events for better performance
//     let ticking = false;
//     const throttledScroll = () => {
//       if (!ticking) {
//         requestAnimationFrame(() => {
//           handleScroll();
//           ticking = false;
//         });
//         ticking = true;
//       }
//     };

//     // Initial call
//     handleScroll();

//     window.addEventListener('scroll', throttledScroll);
//     return () => window.removeEventListener('scroll', throttledScroll);
//   }, [active]);

//   // Update indicator when active changes
//   useEffect(() => {
//     if (active && navRef.current) {
//       const activeNavItem = navRef.current.querySelector(`[data-nav="${active}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }
//   }, [active]);

//   // Initialize indicator on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (navLinks.length > 0) {
//         const firstSection = navLinks[0].title;
//         setActive(firstSection);
//       }
//     }, 500); // Increased delay to ensure all sections are loaded

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/90 backdrop-blur-md border-b border-white/10`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 z-10"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer">
//             Ahsan
//           </p>
//         </Link>

//         {/* Centered Desktop Navigation */}
//         <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
//           <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
//             <ul ref={navRef} className="list-none flex flex-row relative">
//               {/* Animated Background Slider */}
//               <div
//                 className="absolute top-1 bottom-1 bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-full transition-all duration-300 ease-out shadow-lg"
//                 style={{
//                   width: indicatorStyle.width || 0,
//                   left: indicatorStyle.left || 0,
//                   opacity: indicatorStyle.width ? 1 : 0,
//                 }}
//               />

//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="relative z-10"
//                 >
//                   <a
//                     href={`#${link.id}`}
//                     data-nav={link.title}
//                     className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full ${
//                       active === link.title
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                     onClick={(e) => handleNavClick(link.id, link.title, e)}
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
//             onClick={() => setToggle(!toggle)}
//           >
//             <img
//               src={toggle ? close : menu}
//               className="w-6 h-6 object-contain"
//               alt="menu"
//             />
//           </button>

//           {/* Mobile Menu */}
//           <div
//             className={`${
//               !toggle
//                 ? "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
//                 : "opacity-100 scale-100 translate-y-0"
//             } absolute top-16 right-4 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out min-w-[200px]`}
//           >
//             <ul className="list-none flex flex-col p-2">
//               {navLinks.map((link, index) => (
//                 <li key={link.id}>
//                   <a
//                     href={`#${link.id}`}
//                     className={`relative block px-4 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 ${
//                       active === link.title
//                         ? "text-white bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20 border-l-2 border-[#915eff]"
//                         : "text-gray-300 hover:text-white"
//                     }`}
//                     onClick={(e) => {
//                       handleNavClick(link.id, link.title, e);
//                       setToggle(false);
//                     }}
//                   >
//                     {link.title}
//                     {active === link.title && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#915eff] rounded-full animate-pulse" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { styles } from "../styles";
// import { logo, menu, close } from "../assets";
// import { navLinks } from "../contstants";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [active, setActive] = useState("About");
//   const [toggle, setToggle] = useState(false);
//   const [indicatorStyle, setIndicatorStyle] = useState({});
//   const navRef = useRef(null);

//   // Function to handle smooth scrolling and set active state
//   const handleNavClick = (id, title, event) => {
//     event.preventDefault();
//     setActive(title);

//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }

//     // Update indicator after a small delay to ensure DOM is ready
//     setTimeout(() => {
//       const activeNavItem = navRef.current?.querySelector(`[data-nav="${title}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }, 100);
//   };

//   // Update slider indicator position
//   const updateIndicator = (activeElement) => {
//     if (activeElement && navRef.current) {
//       const navRect = navRef.current.getBoundingClientRect();
//       const activeRect = activeElement.getBoundingClientRect();

//       setIndicatorStyle({
//         width: activeRect.width,
//         left: activeRect.left - navRect.left,
//       });
//     }
//   };

//   // Function to determine active section based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       // Debug: Log scroll position
//       // console.log('Scroll Y:', scrollY);

//       let currentActive = "";

//       // Get all sections and their positions
//       const sectionPositions = navLinks.map(link => {
//         const element = document.getElementById(link.id);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const offsetTop = scrollY + rect.top;
//           return {
//             id: link.id,
//             title: link.title,
//             offsetTop: offsetTop,
//             offsetBottom: offsetTop + element.offsetHeight,
//             element: element
//           };
//         }
//         return null;
//       }).filter(Boolean);

//       // Debug: Log section positions
//       // console.log('Section positions:', sectionPositions);

//       // Find current section based on scroll position
//       const scrollPosition = scrollY + 100; // Offset for navbar

//       for (let i = 0; i < sectionPositions.length; i++) {
//         const section = sectionPositions[i];
//         const nextSection = sectionPositions[i + 1];

//         if (nextSection) {
//           // If we're between this section and the next one
//           if (scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop) {
//             currentActive = section.title;
//             break;
//           }
//         } else {
//           // Last section
//           if (scrollPosition >= section.offsetTop) {
//             currentActive = section.title;
//             break;
//           }
//         }
//       }

//       // Fallback: if at the very top, use first section
//       if (!currentActive && scrollY < 50) {
//         currentActive = navLinks[0]?.title;
//       }

//       // Fallback: if at the very bottom, use last section
//       if (!currentActive && (scrollY + windowHeight >= document.documentElement.scrollHeight - 50)) {
//         currentActive = navLinks[navLinks.length - 1]?.title;
//       }

//       // Debug: Log current active
//       // console.log('Current active:', currentActive, 'Previous active:', active);

//       // Update active state if it changed
//       if (currentActive && currentActive !== active) {
//         setActive(currentActive);
//       }
//     };

//     // Add scroll listener
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     // Initial call after a delay to ensure DOM is ready
//     const timer = setTimeout(handleScroll, 1000);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       clearTimeout(timer);
//     };
//   }, [active]);

//   // Update indicator when active changes
//   useEffect(() => {
//     if (active && navRef.current) {
//       const activeNavItem = navRef.current.querySelector(`[data-nav="${active}"]`);
//       if (activeNavItem) {
//         updateIndicator(activeNavItem);
//       }
//     }
//   }, [active]);

//   // Initialize indicator on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (navLinks.length > 0) {
//         setActive(navLinks[0].title);
//       }
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/90 backdrop-blur-md border-b border-white/10`}
//     >
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="flex items-center gap-2 z-10"
//           onClick={() => {
//             setActive("About");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer">
//             Ahsan
//           </p>
//         </Link>

//         {/* Centered Desktop Navigation */}
//         <div className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2">
//           <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
//             <ul ref={navRef} className="list-none flex flex-row relative">
//               {/* Animated Background Slider */}
//               <div
//                 className="absolute top-1 bottom-1 bg-gradient-to-r from-[#915eff] to-[#7c3aed] rounded-full transition-all duration-500 ease-out shadow-lg"
//                 style={{
//                   width: indicatorStyle.width || 0,
//                   left: indicatorStyle.left || 0,
//                   opacity: indicatorStyle.width ? 1 : 0,
//                 }}
//               />

//               {navLinks.map((link) => (
//                 <li
//                   key={link.id}
//                   className="relative z-10"
//                 >
//                   <a
//                     href={`#${link.id}`}
//                     data-nav={link.title}
//                     className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full ${active === link.title
//                         ? "text-white"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => handleNavClick(link.id, link.title, e)}
//                   >
//                     {link.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <button
//             className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
//             onClick={() => setToggle(!toggle)}
//           >
//             <img
//               src={toggle ? close : menu}
//               className="w-6 h-6 object-contain"
//               alt="menu"
//             />
//           </button>

//           {/* Mobile Menu */}
//           <div
//             className={`${!toggle
//                 ? "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
//                 : "opacity-100 scale-100 translate-y-0"
//               } absolute top-16 right-4 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out min-w-[200px]`}
//           >
//             <ul className="list-none flex flex-col p-2">
//               {navLinks.map((link) => (
//                 <li key={link.id}>
//                   <a
//                     href={`#${link.id}`}
//                     className={`relative block px-4 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 ${active === link.title
//                         ? "text-white bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20 border-l-2 border-[#915eff]"
//                         : "text-gray-300 hover:text-white"
//                       }`}
//                     onClick={(e) => {
//                       handleNavClick(link.id, link.title, e);
//                       setToggle(false);
//                     }}
//                   >
//                     {link.title}
//                     {active === link.title && (
//                       <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#915eff] rounded-full animate-pulse" />
//                     )}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useEffect, useState, useRef } from "react";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../contstants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Function to handle smooth scrolling and set active state
  const handleNavClick = (id, title, event) => {
    event.preventDefault();

    // Set scrolling flag to prevent scroll listener interference
    isScrollingRef.current = true;

    // Immediately update active state and indicator
    setActive(title);

    // Update indicator immediately for smooth transition
    const activeNavItem = navRef.current?.querySelector(`[data-nav="${title}"]`);
    if (activeNavItem) {
      updateIndicator(activeNavItem);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Reset scrolling flag after scroll animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000); // Adjust based on your scroll animation duration
    }
  };

  // Update slider indicator position
  const updateIndicator = (activeElement) => {
    if (activeElement && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      setIndicatorStyle({
        width: activeRect.width,
        left: activeRect.left - navRect.left,
      });
    }
  };

  // Function to determine active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Skip scroll detection if user is currently navigating
      if (isScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentActive = "";

      // Get all sections and their positions (including home if it exists)
      const allSections = [
        { id: "home", title: "Home" }, // Map home to About since it's not in navLinks
        ...navLinks
      ];

      const sectionPositions = allSections.map(link => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = scrollY + rect.top;
          return {
            id: link.id,
            title: link.title,
            offsetTop: offsetTop,
            offsetBottom: offsetTop + element.offsetHeight,
            element: element
          };
        }
        return null;
      }).filter(Boolean);

      // Find current section based on scroll position
      const scrollPosition = scrollY + 100; // Offset for navbar

      for (let i = 0; i < sectionPositions.length; i++) {
        const section = sectionPositions[i];
        const nextSection = sectionPositions[i + 1];

        if (nextSection) {
          // If we're between this section and the next one
          if (scrollPosition >= section.offsetTop && scrollPosition < nextSection.offsetTop) {
            // Skip home section, use About instead
            currentActive = section.id === "home" ? "Home" : section.title;
            break;
          }
        } else {
          // Last section
          if (scrollPosition >= section.offsetTop) {
            currentActive = section.id === "contact" ? "Contact" : section.title;
            break;
          }
        }
      }

      // Fallback: if at the very top, use first section
      if (!currentActive && scrollY < 50) {
        currentActive = navLinks[0]?.title;
      }

      // Fallback: if at the very bottom, use last section
      if (!currentActive && (scrollY + windowHeight >= document.documentElement.scrollHeight - 50)) {
        currentActive = navLinks[navLinks.length - 1]?.title;
      }

      // Update active state if it changed
      if (currentActive && currentActive !== active) {
        setActive(currentActive);
      }
    };

    // Debounce scroll events for smoother performance
    let scrollTimeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 10);
    };

    // Add scroll listener
    window.addEventListener('scroll', debouncedScroll, { passive: true });

    // Initial call after a delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 1000);

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timer);
      clearTimeout(scrollTimeout);
    };
  }, [active]);

  // Update indicator when active changes (with smooth transition)
  useEffect(() => {
    if (active && navRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const activeNavItem = navRef.current.querySelector(`[data-nav="${active}"]`);
        if (activeNavItem) {
          updateIndicator(activeNavItem);
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [active]);

  // Initialize indicator on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navLinks.length > 0) {
        setActive(navLinks[0].title);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary/90 backdrop-blur-md border-b border-white/10`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 z-10"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ahsan
          </p>
        </Link>

        {/* Centered Desktop Navigation */}
        <div className="hidden sm:flex">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-full px-1 border border-white/10">
            <ul ref={navRef} className="list-none flex flex-row relative">
              {/* Animated Background Slider */}
              <div
                className="absolute top-1 bottom-1 bg-gradient-to-r from-[#8854fa] to-[#722ee7] rounded-full transition-all duration-300 ease-in-out shadow-lg"
                style={{
                  width: indicatorStyle.width || 0,
                  left: indicatorStyle.left || 0,
                  opacity: indicatorStyle.width ? 1 : 0,
                  transform: 'translateZ(0)', // Hardware acceleration
                }}
              />

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="relative z-10"
                >
                  <a
                    href={`#${link.id}`}
                    data-nav={link.title}
                    className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full ${active === link.title
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                      }`}
                    onClick={(e) => handleNavClick(link.id, link.title, e)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}

              {/* {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="relative z-10"
                >
                  <a
                    href={`#${link.id}`}
                    data-nav={link.title}
                    className={`relative block px-6 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-full hover:bg-white/10 ${active === link.title
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                      }`}
                    onClick={(e) => handleNavClick(link.id, link.title, e)}
                  >
                    {link.title}
                  </a>
                </li>
              ))} */}


            </ul>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              className="w-6 h-6 object-contain"
              alt="menu"
            />
          </button>

          {/* Mobile Menu */}
          <div
            className={`${!toggle
              ? "opacity-0 scale-95 pointer-events-none translate-y-[-10px]"
              : "opacity-100 scale-100 translate-y-0"
              } absolute top-16 right-4 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 ease-out min-w-[200px]`}
          >
            <ul className="list-none flex flex-col p-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative block px-4 py-3 text-[16px] font-medium cursor-pointer transition-all duration-300 rounded-xl hover:bg-white/5 ${active === link.title
                      ? "text-white bg-gradient-to-r from-[#915eff]/20 to-[#7c3aed]/20 border-l-2 border-[#915eff]"
                      : "text-gray-300 hover:text-white"
                      }`}
                    onClick={(e) => {
                      handleNavClick(link.id, link.title, e);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                    {active === link.title && (
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#915eff] rounded-full animate-pulse" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
