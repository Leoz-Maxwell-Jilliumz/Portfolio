
import { Routes, Route, Router} from 'react-router-dom'

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
            <section id='home' className="min-h-screen">
              <Homepage />
            </section>
            
            <div className="bg-gradient-to-b from-mist-600 to-sky-600 w-full">
              <section id="about" className="min-h-screen">
                <About />
              </section>
              <section id="projects" className="min-h-screen">
                <Projects />
              </section>
              <section id="contact" className="min-h-screen">
                <Contact />
                <Footer />
              </section>
            </div>
          </>
        }></Route>
      </Routes>
    </div>
    </> 
  )
}

export default App;
