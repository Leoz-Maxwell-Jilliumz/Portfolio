import { useState } from 'react'
import { Routes, Route, Router } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import Contact from './pages/contact';

function App() {
  const hideNavbarRoutes: string[] = []
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <>
    <div className="w-full flex flex-col justify-end items-center m-0 p-0" >
      {!shouldHideNavbar && <Navbar />}
      <Routes>
       <Route path='/' element={
        <>
        <section id='Home' className="min-h-screen">
          <Homepage />
        </section>

        <section id="Page" className="min-h-screen bg-gradient-to-b from-mist-600 to-sky-600">
          <About />
          <Projects />
          <Contact />
          <Footer />
        </section>

        </>
       }></Route>
      </Routes>
    </div>
    </> 
  )
}

export default App;
