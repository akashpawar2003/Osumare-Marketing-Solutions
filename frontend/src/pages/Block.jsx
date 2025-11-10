import React from 'react'
import one from "../assets/images/Group 23.png"
import two from "../assets/images/Group 24.png"
import three from "../assets/images/Group 25.png"
import four from "../assets/images/Group 26.png"


const Block = () => {
  return (
    <div className='flex flex-col items-center mt-20'>
      <div>
        <div className='font-bold text-4xl flex flex-col items-center text-neutral-800 leading-tight  h-30 w-160'>
          <p>Transform Your Productivity with Our</p>
          <p>Innovative To-Do List Features</p>
        </div>
      </div>
      <div className='flex flex-row gap-x-10 hover:cursor-pointer '>
          <div >
            <img className='transform transition-transform duration-300 hover:scale-110' src={one} alt="" />
          </div>
          <div>
            <img  className='transform transition-transform duration-300 hover:scale-110' src={two} alt="" />
          </div>
          <div>
            <img className='transform transition-transform duration-300 hover:scale-110' src={three} alt="" />
          </div>
          <div>
            <img className='transform transition-transform duration-300 hover:scale-110'  src={four} alt="" />
          </div>
      </div>
    </div>
  )
}

export default Block
