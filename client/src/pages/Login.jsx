import React from 'react'
import { SignIn } from '@clerk/clerk-react'

import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row w-full bg-[#f0fdfa]  relative '>
      {/* Background Image */}
      {/* <img
        src={assets.bgImage}
        alt=''
        className='absolute top-0 left-0 -z-1 w-full h-full object-cover'
      /> */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: '#ffffff',
          backgroundImage: `
       radial-gradient(circle at bottom center, rgba(255, 173, 86, 0.3),transparent 70%)
     `,
        }}
      />

      {/* Left side : Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 z-50'>
        <div className='flex items-center'>
          <img src={assets.logo} alt='' className='h-12 object-contain' />
          <p className='text-xl text-primary-300 ml-2 font-semibold'>Flow</p>
        </div>
        <div className='flex flex-col items-center md:items-start pt-16'>
          <h1 className='text-3xl md:text-5xl md:pb-2 font-bold bg-gradient-to-r from-primary-300/90 to-primary-300/30 bg-clip-text text-transparent mb-2'>
            Discover the Joy of Connecting
          </h1>
          <p className='text-xl md:text-[26px] text-[#13211f]/50 max-w-72 md:max-w-md'>
            Your new place for sharing life's moments!
          </p>
          <div className='mb-8 flex items-center justify-center lg:-mt-8'>
            <img src={assets.login_2} alt='' className='object-cover' />
          </div>
        </div>
        <span className='md:h-10'></span>
      </div>

      {/* Right side: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
        <SignIn />
      </div>
    </div>
  )
}

export default Login
