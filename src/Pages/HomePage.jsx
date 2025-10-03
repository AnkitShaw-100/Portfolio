import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const HomePage = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16 bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-blue-900/90">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Hi, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Ankit
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8">
                            Full Stack Developer & Problem Solver
                        </p>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                            I create beautiful, functional, and user-friendly web applications.
                            Passionate about clean code, modern technologies, and turning ideas into reality.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            View My Work
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border-2 border-slate-600 hover:border-slate-400 rounded-full font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 hover:shadow-lg hover:shadow-slate-500/20"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-12">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-br from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:your.email@example.com"
                            className="p-3 bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default HomePage
