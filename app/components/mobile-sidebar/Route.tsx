import Link from 'next/link'
import React from 'react'

const Routes = () => {
        return (
                <div className='flex flex-col '>
                        <Link className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/about'}>
                                <p className='text-xl font-semibold cursor-pointer'>About</p>
                        </Link>
                        <Link className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/work'}>
                                <p className='text-xl font-semibold cursor-pointer'>Our Work</p>
                        </Link>
                        <Link className='border-b border-gray-300 py-4 hover:text-cyan-700 hover:scale-95 hover:opacity-85 transition-all' href={'/contact'}>
                                <p className='text-xl font-semibold cursor-pointer'>Contact</p>
                        </Link>
                </div>
        )
}

export default Routes