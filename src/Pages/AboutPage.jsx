import React from 'react'
import { Code, Database, Globe, Smartphone, Award, Coffee, Users, Zap } from 'lucide-react'

const AboutPage = () => {
    const skills = [
        { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'], icon: Globe },
        { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'], icon: Database },
        { category: 'Mobile', items: ['React Native', 'Flutter', 'Swift', 'Kotlin'], icon: Smartphone },
        { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Firebase', 'Figma'], icon: Code }
    ]

    const experience = [
        {
            title: 'Senior Full Stack Developer',
            company: 'TechCorp Solutions',
            period: '2022 - Present',
            description: 'Led development of scalable web applications serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.'
        },
        {
            title: 'Frontend Developer',
            company: 'StartupXYZ',
            period: '2020 - 2022',
            description: 'Built responsive web applications using React and TypeScript. Collaborated with design team to create pixel-perfect UIs.'
        },
        {
            title: 'Junior Developer',
            company: 'Digital Agency',
            period: '2019 - 2020',
            description: 'Developed client websites and learned modern web development practices. Gained experience with various CMS platforms.'
        }
    ]

    const achievements = [
        { icon: Award, title: 'Best Developer Award 2023', description: 'Recognized for outstanding contribution to team projects' },
        { icon: Users, title: '50+ Projects Completed', description: 'Successfully delivered projects for various clients' },
        { icon: Coffee, title: '10,000+ Hours Coding', description: 'Dedicated to continuous learning and improvement' },
        { icon: Zap, title: 'Performance Optimization Expert', description: 'Improved app performance by 40% on average' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.
                    </p>
                </div>

                {/* Introduction */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
                        <h2 className="text-3xl font-bold mb-6">My Story</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Hello! I'm Ankit, a passionate full-stack developer based in New York. 
                                My journey into programming started during college when I built my first website 
                                and fell in love with the process of turning ideas into digital reality.
                            </p>
                            <p>
                                Over the years, I've had the privilege of working with startups, agencies, and 
                                established companies, helping them build scalable web applications and solve 
                                complex technical challenges.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to 
                                open-source projects, or sharing my knowledge through technical blog posts and 
                                mentoring aspiring developers.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
                        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-4 mt-1">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Web Development</h3>
                                    <p className="text-slate-300 text-sm">Building responsive, modern web applications with the latest technologies</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-2 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg mr-4 mt-1">
                                    <Smartphone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Mobile Development</h3>
                                    <p className="text-slate-300 text-sm">Creating cross-platform mobile apps with native performance</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mr-4 mt-1">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Backend Systems</h3>
                                    <p className="text-slate-300 text-sm">Designing scalable APIs and database architectures</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Technical{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon
                            return (
                                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 group">
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent size={20} />
                                        </div>
                                        <h3 className="font-semibold text-white">{skill.category}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        {skill.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="text-sm text-slate-300 bg-slate-700/30 px-3 py-1 rounded-full">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Experience */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Work{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <div className="space-y-6">
                        {experience.map((exp, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-blue-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-slate-400 font-medium mt-2 md:mt-0">{exp.period}</div>
                                </div>
                                <p className="text-slate-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Key{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Achievements
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {achievements.map((achievement, index) => {
                            const IconComponent = achievement.icon
                            return (
                                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-yellow-500/50 transition-all duration-300 group">
                                    <div className="flex items-center mb-4">
                                        <div className="p-3 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent size={24} />
                                        </div>
                                        <h3 className="font-bold text-white">{achievement.title}</h3>
                                    </div>
                                    <p className="text-slate-300">{achievement.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
