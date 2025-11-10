import React from 'react'
import mobile from "../assets/images/mobile.jpg"
const About = () => {
  return (
    <div className='w-full flex flex-row min-w-screen ml-10 mt-10'>
      <div className='w-1/2'>
        <img src={mobile} alt="" />
      </div>
      <div className='w-1/2 flex flex-col items-start justify-start mt-15 mx-10'>
        <div className='font-bold text-4xl flex flex-col  text-neutral-800 leading-tight  h-30 w-150'>
          <p>Start Organizing Your</p>
          <p>Life Today</p>
        </div>
        <div>
            Join us now and transform your productivity with our intuitive to-do <br />
            list platform!
        </div>
        <div className="space-x-8 text-red-500 mr-10 mt-15">
          <button className=" hover:cursor-pointer p-1.5 px-6 text-white bg-red-500 border border-red-500 ">
            Sign Up
          </button>
          <button className=" p-1.5 px-6 border text-black border-red-500 hover:cursor-pointer ">
            Learn more
          </button>
        </div>

      </div>
    </div>
  )
}

export default About
