import React from 'react';
import Business from '../assets/business.jpg';
import Social from '../assets/social.jpg';
import Graphic from '../assets/graphic.jpg';
import image1 from '../assets/imm1.jpg';
import Project1 from '../assets/Project.jpg';
import Project4 from '../assets/Project4.jpg';
import Project3 from '../assets/Project3.jpg';
import Project5 from '../assets/Project5.jpg';
import phone1 from '../assets/phone1.jpg';
import phone2 from '../assets/phone2.jpg';
import phone3 from '../assets/phone3.jpg';
import phone4 from '../assets/phone4.jpg';
import phone5 from '../assets/phone5.jpg';
import phone6 from '../assets/phone6.jpg';

import phone7 from '../assets/phone7.jpg';
import phone8 from '../assets/phone8.jpg';
import phone9 from '../assets/phone9.jpg';
import phone10 from '../assets/phone10.jpg';
import phone11 from '../assets/phone11.jpg';

import Project6 from '../assets/Project6.jpg';
import Project7 from '../assets/Project7.jpg';
import Project8 from '../assets/Project8.jpg';
import Project9 from '../assets/Project9.jpg';
import Project10 from '../assets/Project10.jpg';
import Texturebg from '../assets/texture_bg2.jpg';
import Project11 from '../assets/Project11.jpg';
import { IoIosStar } from "react-icons/io";
import Projectiamge from '../assets/banner_system2.png';
import bgImage from '../assets/banner_bg.jpg';
import barangay from '../assets/barangay.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Website = () => {

   useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: false,    // whether animation should happen only once
      });
    }, []);
  return (
     <div className='mt-30'>
            {/* You can add content here SECTION 1*/
              <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center h-auto w-full p-10 lg:p-20">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  <div data-aos="fade-right" className="flex-1 p-3">
                    <div className='flex text-yellow-300 mb-2'>
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                      <IoIosStar size={27} />
                    </div>
                    <div className='flex mb-2' style={{ fontFamily: '"Rubik", sans-serif' }}>
           Recent Project
                    </div>
                    <h1 className='text-6xl mb-5' style={{ fontFamily: '"Anton", sans-serif' }}>
                      Barangay Management System – Custom PHP Web Application
                    </h1>
                    <div className='flex mb-5' style={{ fontFamily: '"Rubik", sans-serif' }}>
A responsive web app built with PHP, MySQL, JavaScript, and Bootstrap to streamline barangay operations with secure logins, record management, and an intuitive user interface.
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
                         Get A Quote
                        </span>
                      </a>
    
      
                    </div>
      
                  </div>
      
                  <div className="flex-2 justify-end p-4">
                    <div data-aos="fade-left" data-hs="flip-up" className='flex justify-end'>
                      <img src={barangay} alt="logo" className="h-40 md:h-110 " />
                    </div>
      
                  </div>
      
                </div>
              </div>
            }
           {/* You can add content here SECTION 4*/
             <div className="bg-cover bg-[#f1f1f1] bg-center h-auto w-full p-10 lg:p-20">
     
               <div className="gap-6 text-center items-start p-1  from-white to-gray-100">
                 {/* WIDE COLUMN (Text & Button) */}
                 <div>
                     <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                    Web Development Projects
                   </p>
                   <h2 className="text-5xl mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>CREATIVE SHOWCASE</h2>
                   <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                     Explore some of the websites I’ve designed and developed, each tailored to meet the unique needs of my clients. These mockups highlight my commitment to quality, creativity, and functionality.
                   </p>
                 </div>
                 <div>
                    {/* SECTION1 */}
                   <section className="pt-10">
                     <div className="max-w-10xl mx-auto px-1">
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
     
                         {/* CARD 1 KO*/}  
                         <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project1})` }}
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
                         <div data-aos="fade-up" data-aos-delay="300"  data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project4})` }}
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
                         {/* CARD 3 KO*/}
                         <div data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project3})` }}
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
                         {/* CARD 4 KO*/}
                         <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project5})` }}
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
                       </div>
                     </div>
                   </section>
                  {/* SECTION 2 */}      
                  <section className="pt-10">
                     <div className="max-w-10xl mx-auto px-1">
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
     
                         {/* CARD 1 KO*/}  
                         <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project6})` }}
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
                         <div data-aos="fade-up" data-aos-delay="300"  data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project7})` }}
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
                         {/* CARD 3 KO*/}
                         <div data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project8})` }}
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
                         {/* CARD 4 KO*/}
                         <div data-aos="fade-up" data-aos-delay="900" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project9})` }}
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
                       </div>

                     </div>
                   </section>

                                     {/* SECTION 3 */}      
                  <section className="pt-10">
                     <div className="max-w-10xl mx-auto px-1">
                      
                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
     
   
                         {/* CARD 2 KO*/}
                         <div data-aos="fade-up" data-aos-delay="300"  data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project10})` }}
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
                         {/* CARD 3 KO*/}
                         <div data-aos="fade-up" data-aos-delay="600" data-aos-anchor-placement="top-bottom" className="bg-white rounded-lg shadow text-center">
                           <div className="m-1 hover:animate-vertical-bounce relative rounded-sm overflow-hidden h-96 group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                             {/* Background Image with zoom effect */}
                             <div
                               className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-[1200ms] ease-in-out"
                               style={{ backgroundImage: `url(${Project11})` }}
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
 
                       </div>

                     </div>
                   </section>
     
     
                 </div>
     
               </div>
     
     
     
             </div>
           }

           {/* You can add content here SECTION 5*/
             <div className="bg-cover bg-stone-50 bg-center h-auto w-full lg:pb-[10rem] p-10 lg:p-20">
                      <div className='text-center mb-10'>
                   <h2 className="text-5xl mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>Real-World Mobile Views</h2>
                   <p className="text-gray-700 mb-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                 Here’s a glimpse of how my custom web applications and designs come to life on mobile devices. These mobile previews reflect my commitment to responsive, user-friendly, and high-performance web solutions — ensuring that every site functions flawlessly across all screen sizes.
                   </p>
                 </div>


            <div className='grid grid-1 sm:grid-cols-1 md-grid-cols2 lg:grid-cols-5 gap-10'>
               <div className="p-0 ">
    <img hover:animate-pulse data-aos="fade-left"
     data-aos-delay="300"
      src={phone1}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>

    <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="600"
      src={phone2}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
      <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="900"
      src={phone11}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>

  <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1200"
      src={phone4}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
    <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1500"
      src={phone5}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
  
            </div>

           <div className='grid grid-1 sm:grid-cols-1 md-grid-cols2 lg:grid-cols-5 gap-10 mt-10'>
               <div className="p-0 ">
    <img hover:animate-pulse data-aos="fade-left"
     data-aos-delay="300"
      src={phone6}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>

    <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="600"
      src={phone7}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
      <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="900"
      src={phone8}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>

  <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1200"
      src={phone9}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
    <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1500"
      src={phone10}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
  
            </div>


           <div className='grid grid-1 sm:grid-cols-1 md-grid-cols2 lg:grid-cols-5 gap-10 mt-10'>
               <div className="p-0 ">
    <img hover:animate-pulse data-aos="fade-left"
     data-aos-delay="300"
      src={phone3}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
{/* 
    <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="600"
      src={phone7}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>
      <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="900"
      src={phone8}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div>

  <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1200"
      src={phone9}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div> */}
    {/* <div className="p-0 ">
    <img data-aos="fade-left"
data-aos-delay="1500"
      src={phone10}
      alt="Image1"
      className="w-full h-full object-cover rounded-lg hover:animate-pulse"
    />
  </div> */}
  
            </div>

             </div>
           }
    </div>
  )
}

export default Website
