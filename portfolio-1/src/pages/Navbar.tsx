function Navbar() {

    return(
        <nav className="bg-transparent text-white p-4 fixed top-0 left-0 w-full z-10">
            <ul className="flex flex-row justify-center gap-10 items-center space-x-4">
                <li><a href="/" className="transition-all duration-400 hover:text-cyan-300 cursor-pointer">Home</a></li>
                <li><a href="/about" className="transition-all duration-400 hover:text-cyan-300 cursor-pointer">About</a></li>
                <li><a href="/projects" className="transition-all duration-400 hover:text-cyan-300 cursor-pointer">Projects</a></li>
                <li><a href="/contact" className="transition-all duration-400 hover:text-cyan-300 cursor-pointer">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;