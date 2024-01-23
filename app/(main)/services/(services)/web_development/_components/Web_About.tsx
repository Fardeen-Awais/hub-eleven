'use client'
import Lottie from 'lottie-react'
import animateData from '../../../../../../public/services/webdevelopement.json'

const Web_About = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <h2 className='text-2xl text-center max-w-2xl p-5'>I will help you to build modern web application with any desire technology. Make customizable website and design with any budget.</h2>
      <Lottie animationData={animateData} loop={true} />
    </div>
  )
}

export default Web_About