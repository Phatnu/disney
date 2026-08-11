import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Techimage from '../assets/tech_bg.jpg';
import { IoIosStar } from 'react-icons/io';

import branding1 from '../assets/Graphics/Branding/BigBrew.jpg';
import branding2 from '../assets/Graphics/Branding/ChilliChicken.jpg';
import branding3 from '../assets/Graphics/Branding/FoodMENU.jpg';
import branding4 from '../assets/Graphics/Branding/FriedChicken.jpg';
import branding5 from '../assets/Graphics/Branding/NikeShoes.jpg';
import branding6 from '../assets/Graphics/Branding/Skincare2.jpg';

import business1 from '../assets/Graphics/BusinessCard/b1mock.jpg';
import business2 from '../assets/Graphics/BusinessCard/b2mock.jpg';
import business3 from '../assets/Graphics/BusinessCard/b3mock.jpg';
import business4 from '../assets/Graphics/BusinessCard/b4mock.jpg';
import business5 from '../assets/Graphics/BusinessCard/b5mock.jpg';
import business6 from '../assets/Graphics/BusinessCard/b6mock.jpg';

import color1 from '../assets/Graphics/Menchangecolor/menchangecolor.jpg';
import color2 from '../assets/Graphics/Menchangecolor/man1colorviolet.jpg';
import color3 from '../assets/Graphics/Menchangecolor/PSDSETUP.jpg';
import color4 from '../assets/Graphics/Menchangecolor/Scholarship Management.jpg';

import poster1 from '../assets/Graphics/PosterDesign/adidas.jpg';
import poster2 from '../assets/Graphics/PosterDesign/CONVERSE_JPG.jpg';
import poster3 from '../assets/Graphics/PosterDesign/macbeth.jpg';

import thumbnail1 from '../assets/Graphics/Thumbnail/Thumbnail1.jpg';

const categories = [
  {
    name: 'Branding',
    description: 'Packaging, product identity, food branding, and visual storytelling for modern consumer brands.',
    images: [branding1, branding2, branding3, branding4, branding5, branding6],
  },
  {
    name: 'Business Card',
    description: 'Clean corporate identity mockups and premium business card design concepts.',
    images: [business1, business2, business3, business4, business5, business6],
  },
  {
    name: 'Men Change Color',
    description: 'Creative color manipulation and digital retouching work for portraits and edited compositions.',
    images: [color1, color2, color3, color4],
  },
  {
    name: 'Poster Design',
    description: 'Poster and campaign graphics with strong visual hierarchy and brand impact.',
    images: [poster1, poster2, poster3],
  },
  {
    name: 'Thumbnail',
    description: 'Social media and content thumbnails designed to attract attention and improve click-through performance.',
    images: [thumbnail1],
  },
];

const Graphics = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className='mt-20'>
      <div
        style={{ backgroundImage: `url(${Techimage})` }}
        className='flex min-h-[420px] items-center justify-center bg-cover bg-fixed bg-center w-full p-8 md:p-12 lg:p-20'
      >
        <div data-aos='fade-up' className='mx-auto max-w-4xl text-center text-white'>
          <div className='mb-4 flex justify-center text-yellow-300'>
            <IoIosStar size={24} />
            <IoIosStar size={24} />
            <IoIosStar size={24} />
            <IoIosStar size={24} />
            <IoIosStar size={24} />
          </div>

          <p
            className='mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80'
            style={{ fontFamily: '"Rubik", sans-serif' }}
          >
            Creative Studio
          </p>

          <h1
            className='mb-4 text-4xl leading-none text-white md:text-6xl'
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            GRAPHICS PORTFOLIO
          </h1>

          <p
            className='mx-auto max-w-2xl text-sm text-white/80 md:text-base'
            style={{ fontFamily: '"Rubik", sans-serif' }}
          >
            Visual concepts and digital design work crafted for branding, marketing, social media, and modern business identity.
          </p>

          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <a
              className='group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden'
              href='#graphics-grid'
            >
              <span className='absolute inset-0 border border-red-600' />
              <span className='block border border-red-600 bg-red-600 px-8 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1'>
                VIEW WORK
              </span>
            </a>

            <a
              className='group relative inline-block text-sm font-medium text-blue-600 focus:ring-3 focus:outline-hidden'
              href='/contact'
            >
              <span className='absolute inset-0 border border-current' />
              <span className='block border border-current bg-white px-8 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1'>
                CONTACT ME
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id='graphics-grid' className='bg-[#f5f5f3] px-4 py-16 md:px-8 lg:px-16 lg:pb-[13rem]'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 text-center'>
            <p
              className='text-sm font-semibold uppercase tracking-[0.35em] text-red-600'
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              Design Categories
            </p>
            <h2
              className='mt-3 text-3xl text-slate-900 md:text-5xl'
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              CREATIVE COLLECTION
            </h2>
          </div>

          <div className='space-y-10'>
            {categories.map((category, index) => (
              <div
                key={category.name}
                data-aos='fade-up'
                className='overflow-hidden rounded-sm border border-stone-200 bg-white shadow-lg shadow-slate-200/70'
              >
                <div className='border-b border-stone-200 bg-slate-50 px-6 py-5 md:px-8'>
                  <p
                    className='text-[10px] font-bold uppercase tracking-[0.25em] text-red-600'
                    style={{ fontFamily: '"Rubik", sans-serif' }}
                  >
                    Category {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3
                    className='mt-2 text-2xl text-slate-900 md:text-3xl'
                    style={{ fontFamily: '"Anton", sans-serif' }}
                  >
                    {category.name}
                  </h3>
                  <p
                    className='mt-2 max-w-3xl text-sm text-slate-600 md:text-base'
                    style={{ fontFamily: '"Rubik", sans-serif' }}
                  >
                    {category.description}
                  </p>
                </div>

                <div className='grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3'>
                  {category.images.map((image, imageIndex) => (
                    <button
                      type='button'
                      key={`${category.name}-${imageIndex}`}
                      onClick={() => setSelectedImage({ src: image, alt: `${category.name} design ${imageIndex + 1}` })}
                      className='group overflow-hidden rounded-sm border border-stone-200 bg-stone-100 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg'
                    >
                      <img
                        src={image}
                        alt={`${category.name} design ${imageIndex + 1}`}
                        className='h-64 w-full object-cover transition duration-500 group-hover:scale-105'
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
          onClick={() => setSelectedImage(null)}
        >
          <div
            className='relative max-w-5xl w-full animate-[fadeIn_0.25s_ease-out] rounded-sm border border-white/20 bg-white p-3 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              onClick={() => setSelectedImage(null)}
              className='absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white hover:bg-black'
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='max-h-[80vh] w-full object-contain rounded-sm'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Graphics;
