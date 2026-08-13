import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Techimage from '../assets/tech_bg.jpg';
import { IoIosStar } from 'react-icons/io';

const videos = [
  { title: 'Video Sample 1', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786632290/vid1.mp4" },
  { title: 'Video Sample 2', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633706/vid2.mp4" },
  { title: 'Video Sample 3', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid3.mp4" },
  { title: 'Video Sample 4', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid4.mp4" },
  { title: 'Video Sample 5', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid5.mp4" },
  { title: 'Video Sample 6', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid6.mp4" },
  { title: 'Video Sample 7', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid7.mp4" },
  { title: 'Video Sample 8', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid8.mp4" },
  { title: 'Video Sample 9', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid9.mp4" },
  { title: 'Video Sample 10', src: "https://res.cloudinary.com/jnjyxhdz/video/upload/v1786633748/vid10.mp4" },
];

const Videos = () => {
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
            Portfolio
          </p>

          <h1
            className='mb-4 text-4xl leading-none text-white md:text-6xl'
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            VIDEO SHOWCASE
          </h1>

          <p
            className='mx-auto max-w-2xl text-sm text-white/80 md:text-base'
            style={{ fontFamily: '"Rubik", sans-serif' }}
          >
            Creative visual work designed to promote brands, tell stories, and give clients a stronger digital presence through motion and storytelling.
          </p>

          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <a
              className='group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden'
              href='#video-grid'
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

      <div id='video-grid' className='bg-[#f5f5f3] px-4 py-16 md:px-8 lg:px-16 lg:pb-[13rem]'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 text-center'>
            <p
              className='text-sm font-semibold uppercase tracking-[0.35em] text-red-600'
              style={{ fontFamily: '"Rubik", sans-serif' }}
            >
              Latest Projects
            </p>
            <h2
              className='mt-3 text-3xl text-slate-900 md:text-5xl'
              style={{ fontFamily: '"Anton", sans-serif' }}
            >
              RECENT VIDEO WORK
            </h2>
          </div>

          <div className='grid gap-7 md:grid-cols-2 xl:grid-cols-3'>
            {videos.map((video, index) => (
              <div
                key={video.title}
                data-aos='zoom-in-up'
                className='group overflow-hidden rounded-sm border border-stone-200 bg-white shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
              >
                <div className='relative aspect-video overflow-hidden bg-slate-900'>
                  <video
                    src={video.src}
                    controls
                    preload='metadata'
                    className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                  />
                </div>

                <div className='flex items-center justify-between gap-4 p-5'>
                  <div>
                    <p
                      className='text-[10px] font-bold uppercase tracking-[0.25em] text-red-600'
                      style={{ fontFamily: '"Rubik", sans-serif' }}
                    >
                      Project {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3
                      className='mt-2 text-2xl text-slate-900'
                      style={{ fontFamily: '"Anton", sans-serif' }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
