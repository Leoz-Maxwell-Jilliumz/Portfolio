
function Projects() {
    return(
        <div className="bg-transparent min-h-screen w-full flex flex-col justify-start items-center m-0 p-0 gap-12">
            <h1 className="text-white text-6xl">My Projects</h1>
            <div className="w-full flex flex-col items-center m-0 p-0">
                <ul className="text-white text-2xl w-full flex flex-col items-center gap-8">
                    <li className="flex flex-col md:flex-col items-center gap-8 w-full max-w-4xl bg-black/30 rounded-lg p-6">
                        <div className="m-4">
                            <a href="https://hightid.web.app/" className="border-none rounded-lg block hover:scale-105 transition-transform duration-300">
                                <img src="/Hightide.png" alt="Hightide Screenshot" className="border-none rounded-lg w-300 h-auto m-0" />
                            </a>
                        </div>
                        <div className="m-4 flex-1 flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-bold mb-2">Hightide: A Contractor Gallery</h2>
                            <p className="text-lg text-center">Hightide is a platform that I built for a local contractor in my area to showcase his work and have people contact him for services.</p>
                        </div>
                    </li>
                    <li className="flex flex-col md:flex-col items-center gap-8 w-full max-w-4xl bg-black/30 rounded-lg p-6">
                    <div className="m-4 flex-1 flex flex-col justify-center items-center">
                    <a href="https://leoz-maxwell-jilliumz.github.io/se_project_spots/" className="border-none rounded-lg block hover:scale-105 transition-transform duration-300">
                        <img src="./Spots.png" alt="Project 2 Screenshot" className="border-none rounded-lg w-300 h-auto m-0" />
                    </a></div>
                    <div className="m-4 flex-1 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-2">Spots: A Social Media App</h2>
                        <p className="text-lg text-center">Spots is a social media app that I built for a software engineering project. It allows users to connect with each other, and share photos.</p>
                    </div>
                    </li>
                    <li className="flex flex-col md:flex-col items-center gap-8 w-full max-w-4xl bg-black/30 rounded-lg p-6"><div>
                        <a href="https://leoz-maxwell-jilliumz.github.io/news-explorer_frontend/" className="border-none rounded-lg block hover:scale-105 transition-transform duration-300">
                            <img src="./NewsExplorer.png" alt="Project 3 Screenshot" className="border-none rounded-lg w-300 h-auto m-0" />
                        </a></div>
                    <div className="m-4 flex-1 flex flex-col justify-center items-center">
                        <h2 className="text-3xl font-bold mb-2">News Explorer: A News Aggregator</h2>
                        <p className="text-lg text-center">News Explorer is a news aggregator app that I built for a software engineering project. It allows users to browse and search for news articles from various sources, and save them to their personal profile to see again later.</p>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Projects;