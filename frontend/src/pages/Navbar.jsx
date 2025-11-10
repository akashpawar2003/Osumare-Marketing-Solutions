import React from 'react'
import logo from "../assets/images/logo.png"

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center min-w-screen text-center h-16 mt-5 ">
        <div className='ml-10  mr-5 w-1/2'>
          <img src={logo} alt="logo" />
        </div>
        <nav className="space-x-5  text-black-10 font-medium flex flex-row" >
          <a href="#" className="">About us</a>
          <a href="#" className="">Features</a>
          <a href="#" className="">More option</a>
          <a href="#" className="">Contact</a>
        </nav>
        <div className="space-x-8 text-red-500 mr-10 ">
          <button className="hover:cursor-pointer rounded  p-1.5 px-6 border border-red-500 ">
            Log In
          </button>
          <button className="hover:cursor-pointer rounded p-1.5 px-6 text-white bg-red-500 border border-red-500 ">
            Sign Up
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
