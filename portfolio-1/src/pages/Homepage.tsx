

function Homepage() {
  

  return (
    <>
      {/* Background image layer */}
      <div
        className="absolute inset-0 z-0 w-full h-full bg-no-repeat bg-center bg-cover sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Foreground content */}
      <div className="relative flex flex-col justify-end items-center w-full m-0 p-0 z-10 min-h-screen">
        <h1 className="text-4xl md:text-8xl font-bold text-white mb-12 md:mb-24 spread-letters whitespace-nowrap text-center">
          Jamin Workman
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-6 pb-10 md:pb-20 w-full max-w-xl">
          <p className="text-white text-lg md:text-2xl">Software Engineer</p>
          <p className="text-white text-lg md:text-2xl">Mount Lookout, WV</p>
        </div>
      </div>
    </>
  );
}

export default Homepage;