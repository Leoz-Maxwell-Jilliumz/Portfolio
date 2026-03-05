
import { useEffect, useState, useRef } from 'react';


function Navbar() {
    const [show, setShow] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShow(true);
                lastScrollY.current = window.scrollY;
                return;
            }
            if (window.scrollY > lastScrollY.current) {
                setShow(false); // scrolling down
            } else {
                setShow(true); // scrolling up
            }
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change or resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className={`text-white p-3 md:p-4 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${menuOpen ? 'bg-gray-900' : 'bg-transparent md:bg-transparent'}`}> 
            <div className="flex items-center justify-between max-w-5xl mx-auto">
                <div className="font-bold text-lg md:text-xl">Jamin</div>
                {/* Hamburger button for mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-[1500ms] mb-1 origin-center ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-[1500ms] mb-1 origin-center ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-white transition-all duration-[1500ms] origin-center ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                {/* Nav links */}
                <ul
                    className={`flex-col md:flex-row justify-center items-center gap-2 md:gap-10 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent overflow-hidden transition-all duration-[1500ms] ease-out
                        ${menuOpen ? 'flex max-h-96 opacity-100 translate-y-0' : 'hidden max-h-0 opacity-0 -translate-y-8'} md:flex md:max-h-none md:opacity-100 md:translate-y-0 shadow-lg md:shadow-none`}
                    style={{ zIndex: 30 }}
                >
                        <li><a href="/" className="block px-4 py-3 md:p-0 transition-all duration-400 hover:text-cyan-300 cursor-pointer text-base md:text-lg" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="/about" className="block px-4 py-3 md:p-0 transition-all duration-400 hover:text-cyan-300 cursor-pointer text-base md:text-lg" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="/projects" className="block px-4 py-3 md:p-0 transition-all duration-400 hover:text-cyan-300 cursor-pointer text-base md:text-lg" onClick={() => setMenuOpen(false)}>Projects</a></li>
                        <li><a href="/contact" className="block px-4 py-3 md:p-0 transition-all duration-400 hover:text-cyan-300 cursor-pointer text-base md:text-lg" onClick={() => setMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;