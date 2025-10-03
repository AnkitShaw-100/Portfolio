import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
    }


    const socialLinks = [
        { icon: Github, name: 'GitHub', url: 'https://github.com', color: 'hover:bg-gray-700' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:bg-blue-600' },
        { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:bg-blue-500' }
    ]

    return (
        <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Get In{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Ready to start your next project? Let's work together to create something amazing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 flex-1 pb-8">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 h-full flex flex-col">
                        <h2 className="text-xl font-bold mb-4">Send Me a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                            <div className="grid md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                                    placeholder="Project Discussion"
                                />
                            </div>
                            <div className="flex-1 flex flex-col">
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm flex-1"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 text-sm"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col h-full">
                        {/* Social Links */}
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-600/30 flex-1 flex flex-col">
                            <h2 className="text-lg font-bold mb-3">Follow Me</h2>
                            <div className="grid grid-cols-1 gap-2 flex-1">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 ${social.color} transition-all duration-300 group`}
                                        >
                                            <IconComponent size={16} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                                            <span className="font-medium text-xs">{social.name}</span>
                                        </a>
                                    )
                                })}
                            </div>
                            
                            {/* Quick Contact Info */}
                            <div className="mt-3 pt-3 border-t border-slate-600/30">
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-1">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
                                        <span className="text-green-400 text-xs font-medium">Available</span>
                                    </div>
                                    <p className="text-slate-300 text-xs">
                                        Reply within 24h
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
