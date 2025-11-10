import React from 'react'
// import ThankYouPopup from "./ThankYouPopup";
import { useState,useEffect } from 'react';
import FormPopup from "../components/FormPopup";
import TableView from "../components/TableView";
import Navbar from './NavBar'
import Section from './Section'
import Logo from './Logo'
import Block from './Block'
import Customer from './Customer'
import About from './About'
import Layout from './Layout'

const Content = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [users, setUsers] = useState([]);

  
    // Load saved data on first render
  const handleAddUser = (userData) => {
    setUsers((prev) => [...prev, userData]); // ✅ updates table instantly
    setShowThankYou(true);

    // Hide thank you and close popup
    setTimeout(() => {
      setShowThankYou(false);
      setShowPopup(false);
    }, 1500);
  };
  
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-6  h-60 min-w-screen">
        <div className='font-bold text-4xl flex flex-col items-center text-neutral-800 leading-tight  h-30 w-150'>
          <p>Simplify Your Life with Our</p>
          <p>Todo App</p>
        </div>
        <div className='text-gray-500  h-30 w-150 flex flex-col items-center'>
          <div>
            Stay organized and boost your productivity with our intuitive todo website.
          </div>
          <div>
            Experience a modern approach to task management that fits your lifestyle.
          </div>
        </div>
        <div className="space-x-5  text-red-500 ">
          <button onClick={() => setShowPopup(true)} className="hover:cursor-pointer rounded-3xl p-1.5 px-7 text-white bg-red-500 border border-red-500 ">
            Get started
          </button>
          {showPopup && (
            <FormPopup
              onClose={() => setShowPopup(false)}
              onSubmit={handleAddUser}
              showThankYou={showThankYou}
            />
          )}

        {/* <TableView users={users}/> */}
          

          
          <button className=" hover:cursor-pointer rounded-3xl p-1.5 px-7 border border-red-500 ">
            Learn more
          </button>
        </div>
      </div>
      <Section/> 
      <Logo/>
      <Block/>
      <Customer/>
      <About/><br /><br />
      {users.length>0?<TableView users={users}/>:<br/>}
      <Layout/>
      
    </>
  )
}

export default Content
