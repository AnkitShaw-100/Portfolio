import React, { useState } from 'react'
import { ExternalLink, Github, Globe, Smartphone, Database, Code } from 'lucide-react'

const Project = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
            image: '/api/placeholder/400/250',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            category: 'web',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application built with React Native and Firebase. Real-time updates, team collaboration, and progress tracking.',
            image: '/api/placeholder/400/250',
            tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
            category: 'mobile',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: true
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard with real-time data visualization. Built with Vue.js and integrated with multiple weather APIs for accurate forecasting.',
            image: '/api/placeholder/400/250',
            tags: ['Vue.js', 'Chart.js', 'Weather API', 'CSS3'],
            category: 'web',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: false
        },
        {
            id: 4,
            title: 'Social Media API',
            description: 'RESTful API for a social media platform with user authentication, post management, real-time messaging, and advanced analytics.',
            image: '/api/placeholder/400/250',
            tags: ['Express.js', 'MongoDB', 'Socket.io', 'JWT'],
            category: 'backend',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: false
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Three.js. Features smooth animations, 3D elements, and optimized performance.',
            image: '/api/placeholder/400/250',
            tags: ['React', 'Three.js', 'Tailwind', 'Framer Motion'],
            category: 'web',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: true
        },
        {
            id: 6,
            title: 'Fitness Tracker',
            description: 'Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Built with Flutter.',
            image: '/api/placeholder/400/250',
            tags: ['Flutter', 'Dart', 'SQLite', 'Health APIs'],
            category: 'mobile',
            demoUrl: 'https://example.com',
            githubUrl: 'https://github.com',
            featured: false
        }
    ]

    const filters = [
        { id: 'all', name: 'All Projects', icon: Code },
        { id: 'web', name: 'Web Apps', icon: Globe },
        { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
        { id: 'backend', name: 'Backend', icon: Database }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    const featuredProjects = projects.filter(project => project.featured)

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Featured{' '}
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        A collection of projects I've built, showcasing my skills in web development, mobile apps, and backend systems.
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project) => (
                            <div key={project.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 group hover:scale-[1.02]">
                                <div className="relative">
                                    <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                                        <Code size={48} className="text-slate-400" />
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold rounded-full">
                                            FEATURED
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-300 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="px-2 py-1 bg-slate-700/50 text-xs rounded-full text-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-slate-500 rounded-lg text-sm font-medium transition-all duration-300"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-2 p-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-600/30">
                        {filters.map((filter) => {
                            const IconComponent = filter.icon
                            return (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                            : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                        }`}
                                >
                                    <IconComponent size={18} />
                                    {filter.name}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* All Projects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group hover:scale-[1.02]">
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center">
                                    <Code size={48} className="text-slate-400" />
                                </div>
                                {project.featured && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-xs font-bold rounded-full">
                                            FEATURED
                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-300 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 bg-slate-700/50 text-xs rounded-full text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                                    >
                                        <ExternalLink size={16} />
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-slate-500 rounded-lg text-sm font-medium transition-all duration-300"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <Code size={64} className="mx-auto text-slate-600 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects found</h3>
                        <p className="text-slate-500">Try selecting a different category.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Project
