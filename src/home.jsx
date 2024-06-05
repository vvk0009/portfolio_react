import React from 'react'
import Navbar from './components/navbar'
import Container from './components/container'
import About from './components/about'
import Skills from './components/skills'
import Project from './components/project'
import Contact from './components/contact-form'
import Footer from './components/footer'


const home = () => {
  return (
    <>
      <Navbar />
      <Container />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default home
