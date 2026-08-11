import React from 'react';
import bgImage from '../assets/banner_bg.jpg';
import Business from '../assets/business.jpg';
import Social from '../assets/social.jpg';
import Graphic from '../assets/graphic.jpg';
import Vidholder from '../assets/vid_placeholder.png';
import Bgfoot from '../assets/pat_bgfoot.jpg';
import rmbg from '../assets/rmbg.jpg';
import html from '../assets/Skills/html.png';
import js from '../assets/Skills/js.png';
import photoshop from '../assets/Skills/photoshop.jpg';
import figma from '../assets/Skills/figma.jpg';
import wordpress from '../assets/Skills/wordpress.jpg';
import capcut from '../assets/Skills/capcut.jpg';

import canva from '../assets/Skills/canva.png';
import visual from '../assets/Skills/visual.jpg';
import mysql from '../assets/Skills/mysql.png';
import php from '../assets/Skills/php.png';

import css from '../assets/Skills/css.png';
import tailwind from '../assets/Skills/tailwind.png';
import csharp from '../assets/Skills/csharp.png';
import asp from '../assets/Skills/asp.png';
import mssql from '../assets/Skills/mssql.png';
import bootstrap from '../assets/Skills/bootstrap.png';
import Projectiamge from '../assets/banner_system2.png';
import Patrick_image from '../assets/hero_image.png';
import Techimage from '../assets/tech_bg.jpg';
import { IoIosStar } from "react-icons/io";
import Texturebg from '../assets/texture_bg2.jpg';
import { MdComputer } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { SiHostinger } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { PiHandshakeLight } from "react-icons/pi";
import { GiFlyingFlag } from "react-icons/gi";
import image1 from '../assets/imm1.jpg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,    // whether animation should happen only once
    });
  }, []);
  return (
    <div className='mt-20'>
      {/* You can add content here SECTION 1*/
        <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center h-auto w-full p-10 lg:p-20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div data-aos="fade-right" className="flex-1 p-3">
              <div className='flex text-yellow-300 mb-2'>
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
              </div>
              <div className='flex mb-2' style={{ fontFamily: '"Rubik", sans-serif' }}>
                Design {'>'} Development {'>'} Optimization
              </div>
              <h1 className='text-6xl mb-5' style={{ fontFamily: '"Anton", sans-serif' }}>
                WEBSITE WORDPRESS<br></br> DEVELOPER
              </h1>
              <div className='flex mb-5' style={{ fontFamily: '"Rubik", sans-serif' }}>
                Customized Websites that are built properly based on industry standards for better speed, performance, and mobile experience.
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
                    MY RATES
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

            <div className="flex-1 justify-end p-4">
              <div data-aos="fade-left" data-hs="flip-up" className='flex justify-end'>
                <img src={Projectiamge} alt="logo" className="h-70 md:h-150 " />
              </div>

            </div>

          </div>
        </div>
      }

      {/* You can add content here SECTION 2*/
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
                Specialized in developing customized and optimized websites. With expertise in WordPress, Elementor, Speed Improvement and Graphics. I provide comprehensive solutions, including domain registration, hosting, design, development, and mobile optimization.
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
                    MORE ABOUT ME
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
                    VIEW TESTIMONIALS
                  </span>
                </a>

              </div>

            </div>
          </div>
        </div>
      }

      {/* You can add content here SECTION 3*/
        <div style={{ backgroundImage: `url(${Texturebg})` }} className="bg-fixed bg-cover bg-center h-auto w-full p-10 lg:p-20">

          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 items-start p-6  from-white to-gray-100">
            {/* WIDE COLUMN (Text & Button) */}
            <div>
              <h2 className="text-5xl mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>HOW I DO MY WORK.</h2>
              <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                I follow a structured, client-focused workflow to build websites that are fast, responsive, and aligned with your business goals. From discovery to launch, each stage is designed to ensure clarity, quality, and a smooth experience from start to finish.
              </p>
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
            </div>

            {/* SMALL CARD 1 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                01
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Consultation &
                Discovery
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <MdComputer size={50} />
              </div>
            </div>

            {/* SMALL CARD 2 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                02
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Planning &
                Strategy
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <PiHandshakeLight size={50} />
              </div>
            </div>
          </div>

          {/*section2*/}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start p-6 from-white to-gray-100">
            {/* SMALL CARD 3 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                03
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Design &
                Layout
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <MdDesignServices size={50} />
              </div>
            </div>
            {/* SMALL CARD 4 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                04
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Website
                Development
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <SiHostinger size={50} />
              </div>
            </div>
            {/* SMALL CARD 5 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                05
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Speed &
                Optimization
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <CgWebsite size={50} />
              </div>
            </div>

            {/* SMALL CARD 6 */}
            <div className="bg-white rounded-sm p-6 shadow-md relative w-full h-55">
              <h3 className="text-red-600 text-6xl font-bold mb-2" style={{ fontFamily: '"Rubik", sans-serif' }}>
                06
              </h3>
              <p className="text-black font-bold uppercase text-left" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Launch &
                Support
              </p>
              <div className="absolute bottom-4 right-4 text-gray-700">
                <GiFlyingFlag size={50} />
              </div>
            </div>
          </div>

        </div>
      }


      {/* You can add content here SECTION 4*/
        <div className="bg-cover bg-stone-50 bg-center h-auto w-full p-10 lg:p-20">

          <div className="gap-6 text-center items-start p-1  from-white to-gray-100">
            {/* WIDE COLUMN (Text & Button) */}
            <div>
              <h2 className="text-5xl mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>ADDITIONAL SERVICES</h2>
              <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                Discover other comprehensive solutions I offer to fulfill all your online business development needs.
              </p>
            </div>
            <div>

              <section className="pt-10">
                <div className="max-w-7xl mx-auto px-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* CARD 1 KO*/}
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center border-1 border-gray-300">
                      <div className="m-1 hover:animate-vertical-bounce relative border-1 border-stone-900  rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        {/* Background Image with zoom effect */}
                        <div
                          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                          style={{ backgroundImage: `url(${image1})` }}
                        ></div>

                        {/* Gradient Overlay with smooth color change */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                        ></div>

                        {/* Text Content with fade + slide-up */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-white z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                          <h3 className="text-lg font-extrabold uppercase tracking-wide">On-Call Developer</h3>
                          <p>Web Updates</p>
                          <p>Web Maintenance</p>
                        </div>

                      </div>
                    </div>
                    {/* CARD 2 KO*/}
                    <div data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center border-1 border-gray-300">
                      <div className="hover:animate-vertical-bounce relative border-1 m-1 border-stone-900  rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        {/* Background Image with zoom effect */}
                        <div
                          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                          style={{ backgroundImage: `url(${Graphic})` }}
                        ></div>

                        {/* Gradient Overlay with smooth color change */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                        ></div>

                        {/* Text Content with fade + slide-up */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-white z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                          <h3 className="text-lg font-extrabold uppercase tracking-wide">GRAPHIC DESIGN</h3>
                          <p>Marketing Materials</p>
                          <p>Social Media Graphics</p>
                        </div>

                      </div>
                    </div>
                    {/* CARD 3 KO*/}
                    <div data-aos-duration="2000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center border-1 border-gray-300">
                      <div className="hover:animate-vertical-bounce relative border-1 m-1 border-stone-900  rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        {/* Background Image with zoom effect */}
                        <div
                          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                          style={{ backgroundImage: `url(${Social})` }}
                        ></div>

                        {/* Gradient Overlay with smooth color change */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                        ></div>

                        {/* Text Content with fade + slide-up */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-white z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                          <h3 className="text-lg font-extrabold uppercase tracking-wide">SOcial media Management</h3>
                          <p>Content Creation</p>
                          <p>Brand Awareness</p>
                        </div>

                      </div>
                    </div>
                    {/* CARD 4 KO*/}
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center border-1 border-gray-300">
                      <div className="hover:animate-vertical-bounce relative border-1 m-1 border-stone-900  rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                        {/* Background Image with zoom effect */}
                        <div
                          className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                          style={{ backgroundImage: `url(${Business})` }}
                        ></div>

                        {/* Gradient Overlay with smooth color change */}
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                        ></div>

                        {/* Text Content with fade + slide-up */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-white z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                          <h3 className="text-lg font-extrabold uppercase tracking-wide">Business Development</h3>
                          <p>Social Media Accounts</p>
                          <p>Google My Business</p>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="sm:flex-block lg:flex gap-2 justify-center mt-15">
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
                          ABOUT ME
                        </span>
                      </a>

                    </div>
                  </div>
                </div>
              </section>


            </div>

          </div>



        </div>
      }


      {/* You can add content here SECTION 5*/
        <div style={{ backgroundImage: `url(${Bgfoot})` }} className="bg-cover bg-fixed bg-center h-70vh w-full p-10 lg:p-20">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6 items-start p-6  from-white to-gray-100">
            {/* WIDE COLUMN (Text & Button) */}
            <div className="flex-1 p-4">
              <div className='flex text-yellow-300 mb-2'>
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
                <IoIosStar size={27} />
              </div>
              <h1 className='text-6xl mb-5 text-stone-50' style={{ fontFamily: '"Anton", sans-serif' }}>
                TESTIMONIALS FROM
                REAL CLIENTS.
              </h1>
              <div className='flex mb-5 text-stone-50' style={{ fontFamily: '"Rubik", sans-serif' }}>
                Heartfelt testimonials directly from my valued clients about their experiences with my services. Their stories reflect the dedication and passion I put into my work every day.
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
                    SEE PROJECTS
                  </span>
                </a>

              </div>

            </div>

            {/* SMALL CARD 1 */}
            <div data-aos="fade-up" className="rounded-sm shadow-md relative w-full h-auto border-1 border-stone-200">
              <div data-aos-anchor-placement="top-bottom" className="m-1 rounded-lg shadow text-center">
                <div className="hover:animate-vertical-bounce relative border-3 border-stone-900  rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  {/* Background Image with zoom effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                    style={{ backgroundImage: `url(${Vidholder})` }}
                  ></div>

                  {/* Gradient Overlay with smooth color change */}
                  <div
                    className="absolute inset-0 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                  ></div>

                  {/* Text Content with fade + slide-up */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-stone-900 z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                    <h3 className="text-lg font-extrabold uppercase tracking-wide">NAME:</h3>
                    <p>Position</p>
                    <p>Company Name</p>
                  </div>

                </div>
              </div>
            </div>

            {/* SMALL CARD 2 */}
            <div data-aos="fade-up" className="rounded-sm shadow-md relative w-full h-auto border-1 border-stone-200">
              <div data-aos-anchor-placement="top-bottom" className="m-1 rounded-lg shadow text-center">
                <div className="hover:animate-vertical-bounce relative border-3 border-stone-900 rounded-xl overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  {/* Background Image with zoom effect */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                    style={{ backgroundImage: `url(${Vidholder})` }}
                  ></div>

                  {/* Gradient Overlay with smooth color change */}
                  <div
                    className="absolute inset-0 group-hover:to-red-800 opacity-80 transition-all duration-700 ease-in-out"
                  ></div>

                  {/* Text Content with fade + slide-up */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 text-stone-900 z-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out text-center">
                    <h3 className="text-lg font-extrabold uppercase tracking-wide">NAME:</h3>
                    <p>Position</p>
                    <p>Company Name</p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      }


      {/* You can add content here SECTION 6*/
        <div style={{ backgroundImage: `url(${rmbg})` }} className="bg-cover bg-stone-50 bg-center h-auto lg:pb-[13rem] w-full p-10 lg:p-15">

          <div className="gap-6 text-center items-start p-1  from-white to-gray-100">

            <div>

              <section className="pt-10">
                <div className="max-w-7xl mx-auto px-4">
                  <div>
                    <h2 className="text-5xl mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>SKILLS & TECHNOLOGIES</h2>
                    <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                      As a web developer, I specialize in using a diverse set of tools and technologies to create high-performing, responsive, and user-friendly websites. Below is an overview of my core skills and the technologies I work with to deliver tailored solutions that meet client needs and ensure an exceptional user experience.
                    </p>
                  </div>
                 

                    {/* CARD 1 KO*/}

                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="rounded-lg text-start">
                      {/* section 1 skills */}
                      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-1'>
                        <div data-aos="fade-down-right" data-aos-delay="500" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={html}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-right" data-aos-delay="600" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={css}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>

                        <div data-aos="fade-down-right" data-aos-delay="700" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={js}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-right" data-aos-delay="800" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={tailwind}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-left" data-aos-delay="800" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={bootstrap}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-left" data-aos-delay="700" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={csharp}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-left" data-aos-delay="600" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={mssql}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-down-left" data-aos-delay="500" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={asp}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                      </div>


                      {/* section 2 skills */}
                      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 gap-1'>
                        <div data-aos="fade-right" data-aos-delay="500" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={wordpress}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos-delay="600" data-aos="fade-right" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={figma}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>

                        <div data-aos="fade-right"data-aos-delay="700" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={photoshop}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-right" data-aos-delay="800" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={capcut}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="800" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={php}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="700" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={mysql}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="600" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={canva}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                        <div data-aos="fade-left" data-aos-delay="500" className='hover:animate-bouncing p-1 sm:p-1 md:p-5 lg:p-5 rounded-sm'>

                          <img
                            src={visual}  // Replace with your image URL
                            alt="HTML"
                            className="mt-6 mx-auto p-5 rounded-lg shadow-md" // Tailwind classes for margin, centering, and rounded corners
                          />

                        </div>
                      </div>
                      

                  </div>
                  <div>

                  </div>
                </div>
              </section>


            </div>

          </div>



        </div>
      }
    </div>


  );
};

export default Home;
