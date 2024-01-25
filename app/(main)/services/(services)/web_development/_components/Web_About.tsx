'use client'
import Lottie from 'lottie-react'
import animateData from '../../../../../../public/services/webdevelopement.json'

const Web_About = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between max-w-7xl min-h-20'>
      <div className='w-full h-full'>
          <Lottie animationData={animateData} loop={true} />
        </div>
        <h4 className='text-xl px-5 max-w-3xl'>Our team specializes in developing modern web applications using the latest technologies. We create customizable websites and designs that cater to your unique requirements and budget, ensuring your online presence is not only functional but also visually impressive.</h4>
        
    </div>
  )
}

export default Web_About