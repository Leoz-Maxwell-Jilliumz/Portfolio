

function Homepage() {
  

  return (
    <>
      {/* Background image layer */}
      <div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')", backgroundSize: '125%', backgroundPosition: 'center' }} />
      {/* Foreground content */}
      <div className="relative flex flex-col justify-end items-center w-full m-0 p-0 z-10 min-h-screen">
        <h1 className="text-8xl font-bold text-white mb-24 spread-letters whitespace-nowrap">
          Jamin Workman
        </h1>
        <div className="flex flex-row justify-between items-center gap-6 pb-20" >
          <p className="text-white text-2xl">Software Engineer</p>
          <p className="text-white text-2xl">Mount Lookout, WV</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;