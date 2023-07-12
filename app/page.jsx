'use client'

import Link from 'next/link'
import {
  BsFillMoonStarsFill,
  BsGithub,
  BsInstagram,
  BsPhone,
} from 'react-icons/bs'

import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'

import Image from 'next/image'

import user from '../public/dev-ed-wave.png'

import about from '../public/about.jpg'

// images for portfolio

import youtube from '../public/react-youtube-clone.png'
import manageReact from '../public/react-website.png'
import portfolio1 from '../public/portfolio1.png'
import reactBudget from '../public/react-vite-budget-app.png'
import todolist from '../public/js-to-do-list.png'
import calculator from '../public/js-calculator.png'
import nextEcom from '../public/next-js-sanity.png'
import jsBudget from '../public/js-budget-app.png'

import html from '../public/html.png'
import css from '../public/css.png'
import js from '../public/js.png'
import tailwind from '../public/tailwind.png'
import react from '../public/react.png'
import vite from '../public/vite.svg'
import next from '../public/next.svg'
import astro from '../public/astro.png'
import ui from '../public/ui.png'
import bootstarp from '../public/bootstrap.svg'

import { useState } from 'react'

export default function Home() {
  const [dark, setDark] = useState(false)

  return (
    <>
      <div className={dark ? 'dark' : ''}>
        <main className='bg-white px-8 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section className='min-h-screen'>
            <nav className='py-5 flex justify-between items-center mb-6 md:mb-20'>
              <h2 className='text-black text-xl font-bold font-mono dark:text-teal-500'>
                Portfolio
              </h2>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill
                    className='cursor-pointer dark:text-teal-400'
                    onClick={() => setDark(!dark)}
                  />
                </li>
                <li>
                  <a
                    href='/resume.pdf'
                    className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                 px-3 py-1 rounded-md ml-4'
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            <div className='flex flex-col justify-center items-center '>
              <h2 className='font-mono text-2xl font-bold text-teal-500'>
                Anthony Ponson
              </h2>
              <h3 className='font-mono text-base font-semibold pt-3 dark:text-white'>
                Web Developer and Designer
              </h3>
              <p className='leading-6 text-base font-medium py-2 pt-3 text-center max-w-xl dark:text-white '>
                As a React fresher front-end developer, I am passionate about
                creating engaging user interfaces and bringing designs to life.
                With a strong foundation in React, I am eager to contribute my
                skills and learn from experienced developers to build innovative
                web applications.
              </p>
            </div>

            <div className='flex items-center justify-center text-4xl text-gray-600 space-x-3 mt-2 dark:text-teal-400'>
              <a href='https://www.linkedin.com/in/anthony-ponson-0879811a0/'>
                <AiOutlineLinkedin className='hover:text-teal-400' />
              </a>
              <a href='https://github.com/anthonyponson'>
                <AiFillGithub className='hover:text-teal-400' />
              </a>
            </div>

            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-6 md:mt-10 overflow-hidden'>
              <Image src={user} layout='fill' objectFit='cover' />
            </div>
          </section>

          <section className='py-32'>
            <div className='flex flex-col space-y-10 justify-around space-x-12 md:space-y-0 md:flex-row'>
              {/* left side */}
              <div className='flex'>
                <Image
                  className='rounded-s-3xl'
                  src={about}
                  height={200}
                  width={200}
                />
              </div>

              {/* right side */}

              <div className='flex flex-col items-center space-y-4'>
                <h2 className='text-xl text-teal-500 font-bold'>About Me</h2>
                <p className='max-w-sm text-base font-semibold dark:text-white'>
                  Hi there! My name is Antony Ponson from Tirunelveli, and I'm a
                  passionate React developer. I recently completed frontend
                  developer course , specializing in web development. I am
                  thrilled to kickstart my career as a React fresher and
                  contribute to exciting projects. My journey with programming
                  started when I discovered my fascination with building
                  user-friendly and interactive web applications. Since then, I
                  have been on a continuous learning path, honing my skills in
                  React, JavaScript, HTML, and CSS. During my studies
                </p>
              </div>
            </div>
          </section>

          <section className='pb-12'>
            <div className='flex flex-col items-center justify-center pt-12'>
              <div className='grid grid-cols-2 justify-center items-center md:grid-cols-5 gap-11'>
                <Image className='group' src={html} height={100} width={100} alt='' />
                <Image className='group' src={css} height={100} width={100} alt='' />
                <Image className='group' src={js} height={100} width={100} alt='' />
                <Image className='group' src={tailwind} height={100} width={100} alt='' />
                <Image className='group' src={vite} height={100} width={100} alt='' />
                <Image className='group' src={react} height={100} width={100} alt='' />
                <Image className='group' src={next} height={100} width={100} alt='' />
                <Image
                  className='rounded-full group'
                  src={astro}
                  height={100}
                  width={100}
                  alt=''
                />
                <Image className='group' src={ui} height={100} width={100} alt='' />
                <Image className='group' src={bootstarp} height={100} width={100} alt='' />
              </div>
            </div>
          </section>

          <section>
            <div className='text-center'>
              <h3 className='text-3xl py-1 text-teal-500 dark:text-teal-500'>
                Portfolio
              </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 col-span-2 row-span-3'>
              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <div className='rounded-lg '>
                    <Image
                      src={youtube}
                      className='rounded-lg'
                      width={'100%'}
                      height={'100%'}
                    />
                  </div>
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/react-youtube-clone-with-tailwindcss'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>youtube clone</h2>
                      <p className='mt-2'>React, Vite, TailwindCss, firebase</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={calculator}
                    className='rounded-lg hover:scale-150 transition-transform'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/calculator-js'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>
                        javascript calculator
                      </h2>
                      <p className='mt-2'>HTML, CSS, JavaScript</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={nextEcom}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/nextjs-ecommerse-with-sanity'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>Ecommerse Website</h2>
                      <p className='mt-2'>NextJs, sanity, TailwindCss</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={reactBudget}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/react-budget-app'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>Budget App</h2>
                      <p className='mt-2'>React, Vite, Tailwindcss</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={portfolio1}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/personal-portfolio-website'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>Portfolio Website</h2>
                      <p className='mt-2'>HTML, Css, JavaScript</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={todolist}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/To-Do-List-JavaScript'>
                      <BsGithub size={50} className='mx-auto' />
                      <h2 className='text-center mt-2'>To-DO-List</h2>
                      <p className='mt-2'>HTML, CSS, JavaScript</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Link
            href='/gallery'
            className='flex flex-col justify-center items-center'
          >
            <div className='text-center my-10 py-2 px-3 rounded-md text-white font-semibold bg-teal-500 max-w-[50%]'>
              see more
            </div>
          </Link>

          <section>
            <>
              <div className='rounded-md mt-5'>
                <div className='text-center my-4'>
                  <h3 className='font-semibold text-teal-500'>contact me</h3>
                </div>

                <div className='flex flex-col justify-center items-center space-x-6 md:flex-row'>
                  <div
                    className='flex-1 basis-1/3 h-40 items-center justify-center flex
                  flex-col bg-gray-900 rounded-t-lg space-y-4 dark:bg-teal-500 group'
                  >
                    <BsPhone size={50} color='white' />
                    <h2 className='text-white'>7639369679</h2>
                  </div>

                  <div
                    className='flex-1 basis-1/3 h-40 items-center justify-center flex
                  flex-col
                   bg-gray-900 rounded-t-lg space-y-4 dark:bg-teal-500 group'
                  >
                    <HiOutlineMail size={50} color='white' />
                    <h2 className='text-white'>antonyponson@gmail.com</h2>
                  </div>

                  <div
                    className='flex-1 basis-1/3 h-40 items-center justify-center flex
                  flex-col bg-gray-900 rounded-t-lg dark:bg-teal-500 group'
                  >
                    <Link
                      href='https://instagram.com/antonyponson'
                      className='flex flex-col items-center justify-center space-y-4'
                    >
                      <BsInstagram size={50} color='white' />
                      <h2 className='text-white'>instagram</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          </section>
        </main>
      </div>
    </>
  )
}
