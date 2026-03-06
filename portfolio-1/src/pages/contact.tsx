
function Contact() {
    return (
        <div className="bg-transparent min-h-screen w-full flex flex-col justify-center items-center m-0 p-0 px-4 md:px-12 gap-6">
            <h1 className="text-white text-4xl text-center md:text-6xl mb-8">Contact Me</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl mx-auto px-2">
                {/* Email Card */}
                <a href="mailto:jaminworkman@gmail.com" className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-cyan-900 transition-colors cursor-pointer">
                    <span className="text-3xl mb-2">📧</span>
                    <span className="text-white font-semibold text-lg mb-1">Email</span>
                    
                </a>
                {/* LinkedIn Card */}
                <a href="https://www.linkedin.com/in/jamin-workman/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-cyan-900 transition-colors cursor-pointer">
                    <span className="text-3xl mb-2">💼</span>
                    <span className="text-white font-semibold text-lg mb-1">LinkedIn</span>
                   
                </a>
                {/* GitHub Card */}
                <a href="https://github.com/Leoz-Maxwell-Jilliumz" target="_blank" rel="noopener noreferrer" className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-cyan-900 transition-colors cursor-pointer">
                    <span className="text-3xl mb-2">🐙</span>
                    <span className="text-white font-semibold text-lg mb-1">GitHub</span>
                    
                </a>
                {/* Resume Download Card */}
                <a href="./Jamin_Workman_2_17.docx" download className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center hover:bg-cyan-900 transition-colors cursor-pointer">
                    <span className="text-3xl mb-2">📄</span>
                    <span className="text-white font-semibold text-lg text-center mb-1">Download My Resume</span>
                   
                </a>
            </div>
        </div>
    );
}

export default Contact;