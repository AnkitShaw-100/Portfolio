import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]

    return (
        <nav className="fixed w-full top-0 z-50 bg-slate-900 border-b border-slate-700">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-3">
                            <span className="font-bold text-lg text-white">
                                Ankit | Portfolio
                            </span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium text-sm transition-colors duration-200 ${
                                    location.pathname === link.path
                                        ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                                        : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Download Button */}
                    <div className="flex items-center">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors duration-200"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar