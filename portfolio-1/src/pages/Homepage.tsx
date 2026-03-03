function Homepage() {
    return (
        <div
            className="h-screen w-full flex flex-col justify-end items-center m-0 p-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('/bg.jpg')",
                backgroundSize: "150%",
                height: "100vh"
            }}
        >
            <h1 className="text-8xl font-bold text-white mb-20 spread-letters whitespace-nowrap">Jamin Workman</h1>
            <div className="flex flex-row justify-space-between gap-7 items-center mb-20">
        <p className="text-2xl text-white mb-10 tracking-wide">Software Engineer</p>
        <p className="text-2xl text-white mb-10 tracking-wide">Mt. Lookout, WV <span className="text-lg text-gray-300">(open to relocation)</span></p>
        </div>
        </div>
        
    );
}

export default Homepage;