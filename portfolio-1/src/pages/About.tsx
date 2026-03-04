
function About(){
    return(
        <div className="bg-transparent min-h-screen w-full flex flex-row justify-around items-center m-0 p-0">
            <img src="./Jamin-Bust.jpg" alt="Jamin Workman" className="border-none rounded-lg w-100 h-100 mb-4 ml-12" />
            <div className="h-74 w-1/2 flex flex-col justify-start items-start gap-6 m-0 p-0 mr-16">
                <h1 className="text-white text-6xl">About Me</h1>
                <p className="text-white text-lg">I’m a software developer passionate about building practical tools and applications that solve real problems. My primary stack includes JavaScript, TypeScript, React, and modern backend technologies. I enjoy the entire development process—from designing clean user interfaces to building efficient backend systems and databases. I’m always learning new technologies and looking for opportunities to work on meaningful products with strong teams.</p>
            </div>
        </div>
    )
}

export default About;