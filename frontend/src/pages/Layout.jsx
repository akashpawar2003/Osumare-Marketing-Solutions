import React from 'react'
import logo from "../assets/images/logo.png"

const Layout = () => {
  return (
  <div className='min-w-screen'>
    <div className='w-full flex flex-row mt-10 '>
      <div className='w-1/2 flex flex-col gap-5 justify-start ml-10'>
        <img src={logo} className='h-15 w-40'/>
        <div className='text-black'>
          <p>Subscribe to our newsletter for the latest features and updates.</p>
          <p>delivered to you</p>
        </div>
        <div className='flex flex-row gap-2'>
          <input className='border p-1.5 px-8' type="text" placeholder='Your email here'/>
          <button className="rounded p-1.5 px-6 text-white bg-red-500 border border-red-500 ">
            Join
          </button>
        </div>
        <div className=''>
          By subscribing, you consent to our Privacy Policy and agree to receive updates.
        </div>
      </div>
      
      <div className='w-1/2 flex flex-row gap-9'>
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='font-bold mb-2'>Useful Links</li>
            <li> Page</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='font-bold mb-2'>Resources</li>
            <li>Help centre</li>
            <li>User Guide</li>
            <li>Community Forum</li>
            <li>Feedback</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <ul className='flex flex-col gap-2'>
            <li className='font-bold mb-2'>Connect With Us</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X</li>
            <li>Linkdein</li>
            <li>Youtube</li>
          </ul>
        </div>

      </div>
    </div>
    <hr className='mt-10'/>
    <div className='flex flex-row gap-140 mt-5'>
      <p className='ml-10'>© 2024 Osumare. All rights reserved.</p>
      <ul className='flex flex-row gap-5 ml-30 mb-10'>
        <li>Privacy Policy</li>
        <li>Term of Service</li>
        <li>Cookie Setting</li>
      </ul>
    </div>
  </div>  
  )
}

export default Layout
