import React from 'react'
import man from "../assets/images/man.png"
import frame from "../assets/images/Frame 26.png"
import { useState } from 'react'
const Section = () => {
  
  return (
    <div className='min-w-screen mt-5 ml-15 h-150 flex flex-row gap-x-2'>
      <div className='h-full w-[60%] rounded-2xl bg-[#FF3E54]'>
        <div className='text-white ml-10 mt-10'>
          <div className='text-8xl'>
            <div className='text-red-300'>Organize.</div>
            <div>Achieve.</div>
            <div>Relax.</div>
          </div>
          <div className='mt-10'>
            <div>
              Turn clutter into clarity, chaos into control, and dreams into done.bold
            </div>
            <div>
              visions into market success
            </div>
          </div>
        </div>
        <div className="space-x-5 ml-10 text-red-500 mt-20">
          <button className="rounded-3xl p-1.5 px-5 py-3 text-black font-bold-500 bg-white border border-red-500 hover:cursor-pointer">
            Get started Today
          </button>
          
          <button className="rounded-3xl p-1.5 px-5 py-3 bg-red-400 text-white hover:cursor-pointer ">
            Discover Features
          </button>
        </div>
      </div>
      <div className='transform transition-transform duration-300 hover:scale-110 h-full w-[29%] rounded-3xl'>
          <img src={man} alt="" className="w-full h-full object-cover rounded-2xl " />
      </div>
    </div>
    
  )
}

export default Section
