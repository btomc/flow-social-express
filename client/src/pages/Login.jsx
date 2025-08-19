import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      {/* Background Image */}
      <img
        src={assets.bgImage}
        alt=''
        className='absolute top-0 left-0 -z-1 w-full h-full object-cover'
      />

      {/* Left side : Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <div className='flex items-center'>
          <img src={assets.logo} alt='' className='h-12 object-contain' />
          <p className='text-xl text-primary-100 ml-2 font-semibold'>Flow</p>
        </div>
        <div className='flex flex-col'>
          <div className='mb-8 flex items-center justify-center'>
            <img src={assets.login_2} alt='' className='object-cover' />
          </div>

          <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r from-primary-100 to-secondary bg-clip-text text-transparent mb-2'>
            Discover the Joy of Connecting
          </h1>
          <p className='text-xl md:text-3xl text-primary-200 max-w-72 md:max-w-md'>
            your new place for sharing life's moments!
          </p>
        </div>
        <span className='md:h-10'></span>
      </div>

      {/* Right side: Login Form */}
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'></div>
    </div>
  )
}

export default Login
