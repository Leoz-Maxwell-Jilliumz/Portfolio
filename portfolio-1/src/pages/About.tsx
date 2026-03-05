
function About(){
    return(
        <div className="bg-transparent min-h-screen w-full flex flex-col md:flex-row justify-around items-center m-0 p-0 px-4 md:px-0 gap-0">
            <img src="./Jamin-Bust.jpg" alt="Jamin Workman" className="border-none rounded-xl w-100 h-100 md:w-100 md:h-100 mb-4 md:ml-12 md:mb-0" />
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-6 m-0 p-0 md:mr-16">
                <h1 className="text-white text-4xl text-center md:text-6xl">About Me</h1>
                <p className="text-white text-md md:text-lg text-center">I’m a software developer passionate about building practical tools and applications that solve real problems. My primary stack includes JavaScript, TypeScript, React, and modern backend technologies. I enjoy the entire development process—from designing clean user interfaces to building efficient backend systems and databases. I’m always learning new technologies and looking for opportunities to work on meaningful products with strong teams.</p>
            </div>
        </div>
    )
}

export default About;