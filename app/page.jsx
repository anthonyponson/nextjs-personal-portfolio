'use client'
import Link from 'next/link'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import Image from 'next/image'
import user from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'

import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import { useState } from 'react'



export default function Home() {
  const [dark , setDark] = useState(false)

  return (
    <>
   <div className={dark ? 'dark' : ''}> 
    <main className='bg-white px-8 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className='min-h-screen'>
        <nav className='py-5 flex justify-between items-center mb-6 md:mb-20'>
          <h2 className='text-black text-xl font-bold font-mono dark:text-white'>Portfolio</h2>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer dark:text-teal-400' onClick={() => setDark(!dark)} />
            </li>
            <li>
              <a
                className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white
                 px-3 py-1 rounded-md ml-4'
                href='#'
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
          <h3 className='font-mono text-base font-semibold dark:text-white'>
            Web Developer and Designer
          </h3>
          <p className='leading-6 text-base font-medium py-2 text-center max-w-xl dark:text-white '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quae, recusandae perferendis nemo totam velit illum placeat.
          </p>
        </div>

        <div className='flex items-center justify-center text-4xl text-gray-600 space-x-3 mt-2 dark:text-teal-400'>
          <AiFillTwitterCircle />
          <AiOutlineLinkedin />
          <AiFillInstagram />
        </div>

        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-6 md:mt-10 overflow-hidden'>
          <Image src={user} layout='fill' objectFit='cover' />
        </div>
      </section>

      <section>
        <div className='mt-6'>
          <h3 className='py-1 text-2xl'>Services i offer</h3>
          <p className='text-base py-2 leading-8 font-medium text-gray-800'>
            I offer a comprehensive{' '}
            <span className='text-teal-500'>range of services</span> to help
            businesses and individuals establish a strong online presence and
            create visually appealing, functional, and user-friendly websites.
          </p>
        </div>

        <div className='space-y-3 flex flex-col md:flex-row md:flex-1 md:space-x-6'>
          <div className='flex flex-col items-center justify-center space-y-3 text-center shadow-lg p-5 my-10'>
            <Image src={design} width={100} height={1000} />
            <h3 className='font-bold text-base'>Beautiful Designs</h3>
            <p className='text-gray-800 font-medium'>
              Creating elegant designs suited for your needs follwing core
              design theory
            </p>

            <h4 className='text-teal-500 font-semibold'>Design Tools i use</h4>

            <p className='text-gray-800 font-medium'>Figma</p>
            <p className='text-gray-800 font-medium'>Photoshop</p>
            <p className='text-gray-800 font-medium'>Illustrator</p>
          </div>
          <div className='flex flex-col items-center justify-center space-y-3 text-center shadow-lg p-5 my-10'>
            <Image src={code} width={100} height={1000} />
            <h3 className='font-bold text-base'>Beautiful Designs</h3>
            <p className='text-gray-800 font-medium'>
              Creating elegant designs suited for your needs follwing core
              design theory
            </p>

            <h4 className='text-teal-500 font-semibold'>Design Tools i use</h4>

            <p className='text-gray-800 font-medium'>Figma</p>
            <p className='text-gray-800 font-medium'>Photoshop</p>
            <p className='text-gray-800 font-medium'>Illustrator</p>
          </div>

          <div className='flex flex-col items-center justify-center space-y-3 text-center shadow-lg p-5 my-10'>
            <Image src={consulting} width={100} height={1000} />
            <h3 className='font-bold text-base'>Beautiful Designs</h3>
            <p className='text-gray-800 font-medium'>
              Creating elegant designs suited for your needs follwing core
              design theory
            </p>

            <h4 className='text-teal-500 font-semibold'>Design Tools i use</h4>

            <p className='text-gray-800 font-medium'>Figma</p>
            <p className='text-gray-800 font-medium'>Photoshop</p>
            <p className='text-gray-800 font-medium'>Illustrator</p>
          </div>
        </div>
      </section>

      <section>
        <div className='text-center'>
          <h3 className='text-3xl py-1'>Portfolio</h3>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          <div className='basis-1/2 flex-1'>
            <Image
              src={web1}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>

          <div className='basis-1/2 flex-1'>
            <Image
              src={web2}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>

          <div className='basis-1/2 flex-1'>
            <Image
              src={web3}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>

          <div className='basis-1/2 flex-1'>
            <Image
              src={web4}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>

          <div className='basis-1/2 flex-1'>
            <Image
              src={web5}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>

          <div className='basis-1/2 flex-1'>
            <Image
              src={web6}
              className='rounded-lg'
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      </section>
    </main>
    </div>
    </>
  )
}
