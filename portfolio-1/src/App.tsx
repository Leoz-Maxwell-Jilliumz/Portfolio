import { useState } from 'react'

import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
    <div className="bg-cover bg-center h-screen w-full flex flex-col justify-end items-center m-0 p-0" style={{ backgroundImage: "url('/bg.jpg')", backgroundSize: '125%', }}>
      <Navbar />
      <Homepage />
    </div>
    </> 
  )
}

export default App;
