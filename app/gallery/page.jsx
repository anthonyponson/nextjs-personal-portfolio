'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

// images for portfolio

import youtube from '@/public/react-youtube-clone.png'
import manageReact from '@/public/react-website.png'
import portfolio1 from '@/public/portfolio1.png'
import reactBudget from '@/public/react-vite-budget-app.png'
import todolist from '@/public/js-to-do-list.png'
import calculator from '@/public/js-calculator.png'
import nextEcom from '@/public/next-js-sanity.png'
import jsBudget from '@/public/js-budget-app.png'

const AboutPage = () => {

  const [dark, setDark] = useState(false)

  return (
    <>
      <div className={dark ? 'dark' : ''}>
        <main className='bg-white px-8 md:px-20 lg:px-40 dark:bg-gray-900'>
          <section>
            <div className='text-center'>
              <Link href='/'>
                <h3 className='text-3xl py-1 text-teal-500 dark:text-teal-500'>
                  Portfolio
                </h3>
              </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 col-span-2 row-span-3'>
              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={youtube}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className='basis-1/2 flex-1'>
                <div className='group relative'>
                  <Image
                    src={calculator}
                    className='rounded-lg'
                    width={'100%'}
                    height={'100%'}
                  />
                  <div className='hidden group-hover:flex items-center absolute inset-0 justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg'>
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
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
                    <Link href='https://github.com/anthonyponson/react-manage-lnding-page'>
                      <BsGithub size={50} className='mx-auto' />
                      <p className='mt-2'>React website</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default AboutPage
