import React from 'react'
import { Link } from "react-router-dom"
import "./LandingPage.css"

function LandingPage() {
    return (
        <div className=' flex'>
            <div className='flex flex-col items-center justify-center w-2/3 lg:gap-y-5 max-[1024px]:gap-y-4'>
                <h1 className='lg:text-5xl md:text-3xl max-[768px]:text-2xl font-bold'>Feat wear <span className='text-indigo-600'>Paradies</span></h1>
                <p className='md:text-sm lg:text-base max-[768px]:text-xs lg:px-10 max-[1024px]:px-8'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!
                </p>
                <div className='text-sm space-x-5'>
                    <Link to="login" className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-3 px-8 border border-blue-700 rounded">
                        Login
                    </Link>
                    <Link to="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 border border-blue-700 rounded">
                        Visit Store
                    </Link>
                </div>
            </div>
            <div className='w-1/3 relative'>
                <img src="https://shoe-paradies-myok1ii3u-aliahmad051999-gmailcom.vercel.app/_next/image?url=%2Fwal.avif&w=2048&q=75" className='h-fit'/>
            </div>
            {/* <div id='mydiv' className=' absolute left-2/3'></div> */}
        </div>
    )
}


export { LandingPage }