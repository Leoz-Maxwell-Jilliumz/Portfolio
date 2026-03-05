import { useEffect, useState } from 'react';

function Navbar() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 50) {
                setShow(true);
                setLastScrollY(window.scrollY);
                return;
            }
            if (window.scrollY > lastScrollY) {
                setShow(false); // scrolling down
            } else {
                setShow(true); // scrolling up
            }
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return(
        <nav className={`bg-transparent text-white p-4 fixed top-0 left-0 w-full z-20 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
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