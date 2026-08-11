
import React, { useState, useEffect } from 'react';
import Techimage from '../assets/tech_bg.jpg';
import rmbg from '../assets/rmbg.jpg';
import Patrick_image from '../assets/hero_image.png';
import { IoIosStar } from "react-icons/io";
import Pormal from '../assets/Pormal2.jpg'; 
import Pormal2 from '../assets/Patsss2.jpg'; 
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { SiHostinger } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { PiHandshakeLight } from "react-icons/pi";
import { GiFlyingFlag } from "react-icons/gi";
import { BsPatchCheckFill } from "react-icons/bs";
import cer1 from '../assets/Certificate/JsEssential1 (1).jpg';
import cer2 from '../assets/Certificate/simple.jpg';
import cer3 from '../assets/Certificate/udemy.jpg';
import cer4 from '../assets/Certificate/Css.jpg';
import cer5 from '../assets/Certificate/Responsive.jpg';
import cer6 from '../assets/Certificate/Html.jpg';
import cer7 from '../assets/Certificate/Bootstrap.jpg';
import cer8 from '../assets/Certificate/Js1.jpg';


import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

    const [hover, setHover] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
        <div className='mt-15'>
              <div style={{ backgroundImage: `url(${Techimage})` }} className="bg-cover bg-fixed bg-center h-70vh w-full p-10 lg:p-20">
                <div className="flex flex-col md:flex-row gap-4 items-center">
      
                  <div className="flex-1 p-3">
      
                    <img src={Patrick_image} alt="logo" className="h-auto md:h-150 -mb-[30px] md:-mb-[90px]" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className='flex text-yellow-300 mb-2'>
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                    </div>
                    <h1 className='text-6xl mb-5 text-stone-50' style={{ fontFamily: '"Anton", sans-serif' }}>
                      I'M PATRICK CUETO, YOUR ONE-STOP DEVELOPER.
                    </h1>
                    <div className='flex mb-5 text-stone-50' style={{ fontFamily: '"Rubik", sans-serif' }}>
                      I create modern, responsive, and business-focused websites tailored to each client’s goals. Skilled in WordPress, Elementor, custom web development, speed optimization, design support, and website setup including domain, hosting, and ongoing maintenance.
                    </div>
      
                    <div className="sm:flex-block lg:flex gap-2">
                      <a
                        class="group relative inline-block text-sm sm:text-base md:text-lg font-medium text-white focus:ring-3 focus:outline-hidden mb-2 w-full text-center sm:mb-0 sm:w-auto"
                        href="#"
                      >
                        <span class="absolute inset-0 border border-red-600"></span>
                        <span
                          class="block border border-red-600 bg-red-600 px-8 sm:px-10 md:px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                          CONTACT ME
                        </span>
                      </a>
      
                      <a
                        class="group relative inline-block text-sm sm:text-base md:text-lg font-medium text-blue-600 focus:ring-3 focus:outline-hidden mb-2 w-full text-center sm:mb-0 sm:w-auto"
                        href="#"
                      >
                        <span class="absolute inset-0 border border-current"></span>
                        <span
                          class="block border border-current bg-white px-8 sm:px-10 md:px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                          SEE PROJECTS
                        </span>
                      </a>
      
                    </div>
      
                  </div>
                </div>
              </div>


                <div style={{ backgroundImage: `url(${rmbg})` }} className="bg-cover bg-fixed bg-center h-70vh w-full p-10 lg:p-20 mb-0">

<div className="max-w-6xl mx-auto mt-0 p-6">
<div className="bg-white p-10 md:p-16 shadow-xl">

  <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

    {/* LEFT IMAGE */}
    <div className="flex-shrink-0">
         <img
                  src={hover ? Pormal2 : Pormal}
                  alt="Profile"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  className="w-40 h-40 object-cover rounded-lg shadow-sm transition-all duration-300"
                />
    </div>

    {/* RIGHT CONTENT */}
    <div className="space-y-4 w-full">

      {/* Name + Location */}
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Patrick Cueto  
          <BsPatchCheckFill className="text-blue-500 text-2xl" />
        </h1>
        <p className="text-gray-500 flex items-center gap-2 mt-1">
          <FaLocationDot className="text-gray-400" />
          Calumpit, Bulacan
        </p>
      </div>

      {/* Title */}
      <p className="text-gray-800 text-lg">
        WordPress Developer • Freelance Web Developer
      </p>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap gap-3 pt-2">
        <button className="border border-stone-300 text-xs px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
          <FaSquarePhone /> Contact Me
        </button>
        <button className="border border-stone-300 text-xs px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
          <MdEmail /> Send Email
        </button>
        <button className="border border-stone-300 text-xs px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          Download CV
        </button>
      </div>

    </div>
  </div>

  {/* ABOUT SECTION */}
  <div className="mt-12 p-6 rounded-xl border border-stone-200 bg-white shadow-sm">

    <h2 className="text-xl font-bold flex items-center gap-2 mb-3">
      <FaUserCircle /> About
    </h2>

    <p className="text-gray-600 leading-relaxed">
      I am a dedicated Freelance Web Developer and WordPress Developer focused on creating clean, responsive, and high-performing digital experiences. I enjoy transforming ideas into practical website solutions that are visually appealing, user-friendly, and built to support business growth. My work combines design thinking, technical execution, and performance optimization to deliver websites that are not only attractive but also reliable, mobile-friendly, and easy to manage.
    </p>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
      <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
        <span className="font-semibold text-red-600">Core Expertise:</span> WordPress Development, Elementor, Custom Website Design, Speed Improvement, Mobile Optimization
      </div>
      <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
        <span className="font-semibold text-red-600">Project Support:</span> Website Setup, Maintenance, Design Updates, and Ongoing Client Support
      </div>
    </div>

  </div>

</div>




  <div className="bg-white shadow-xl grid grid-cols-1 md:grid-cols-1 gap-10 p-20 items-center mt-10 mb-10">
      <h2 className="text-3xl font-bold text-start mb-0">My Journey</h2>
  <div className="mx-auto relative border-l border-gray-300">

    {/* ITEM 1 */}
    <div className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-1.5 border border-white"></div>
      <h3 className="text-xl font-semibold">2025 – Present</h3>
      <p className="text-red-600 font-medium">Freelance Web Developer</p>
      <p className="text-gray-600 mt-2">
Currently working as a Freelance Web and WordPress Developer, delivering modern, optimized, and responsive websites while providing custom features and ongoing support for clients.
      </p>
    </div>

    {/* ITEM 2 */}
    <div className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-1.5 border border-white"></div>
      <h3 className="text-xl font-semibold">2023 – 2026</h3>
      <p className="text-red-600 font-medium">Wordpress Developer</p>
      <p className="text-gray-600 mt-2">
        Developed core skills in programming, web technologies, database systems, and system analysis, forming a strong base for a career in IT and software development.

      </p>
    </div>

    {/* ITEM 3 */}
    <div className="mb-10 ml-6">
      <div className="absolute w-3 h-3 bg-red-600 rounded-full -left-1.5 border border-white"></div>
      <h3 className="text-xl font-semibold">2019 – 2023</h3>
      <p className="text-red-600 font-medium">BSIS Student</p>
      <p className="text-gray-600 mt-2">
        Explored programming, web technologies, and system design while
        developing a strong foundation in IT and software development.
      </p>
    </div>

  </div>

{/* CERTIFICATE START */}
<div className="pb-15 bg-white ">
  <div className="max-w-7xl mx-auto">

    {/* Title & Description */}
    <div className="mb-7 text-start max-w-3xl">
      <h2 className="text-4xl font-bold text-gray-900">
        Certified Professional Excellence
      </h2>
      <p className="text-gray-600 mt-3 text-lg text-start">
        Verified certifications from reputable global institutions, showcasing skill,
        experience, and professional development.
      </p>
    </div>

    {/* Certificate Grid */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-8
      "
    >
      {[cer1, cer2, cer3, cer4, cer5, cer6, cer7, cer8].map((c, i) => (
        <div
          key={i}
          className="border border-gray-200 p-3 hover:border-gray-400 transition"
        >
          <img
            src={c}
            alt={`Certificate ${i + 1}`}
            className="w-full h-32 object-contain"
          />
        </div>
      ))}
    </div>

  </div>
</div>


{/* CERTIFICATE END */}

  </div>
  
</div>


                </div>








    </div>
  )
}

export default About
