import React from 'react'
import Navbar from './pages/NavBar'
import Content from './pages/Content'
import Section from './pages/Section'
import Logo from './pages/Logo'
import Block from './pages/Block'
import Customer from './pages/Customer'
import About from './pages/About'
import Layout from './pages/Layout'

const App = ({ users }) => {
  return (
    <>
      <Navbar/> 
      <Content/>
      {/* <Section/> 
      <Logo/>
      <Block/>
      <Customer/>
      <About/>
      <Layout/> */}
    </>
  )
}

export default App
