function Navbar() {

    return(
        <nav className="bg-transparent text-white p-4">
            <ul className="flex flex-row justify-center gap-10 items-center space-x-4">
                <li><a href="/" className="transition-all duration-400 hover:text-cyan-200">Home</a></li>
                <li><a href="/about" className="transition-all duration-400 hover:text-cyan-200">About</a></li>
                <li><a href="/projects" className="transition-all duration-400 hover:text-cyan-200">Projects</a></li>
                <li><a href="/contact" className="transition-all duration-400 hover:text-cyan-200">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;