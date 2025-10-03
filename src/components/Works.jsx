import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with user authentication, shopping cart, payment integration, and admin dashboard. Built with React, Node.js, MongoDB, and Stripe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/your-username/ecommerce-platform",
    live_demo_link: "https://your-ecommerce-demo.vercel.app",
  },
  {
    name: "Social Media Dashboard",
    description:
      "A comprehensive social media management platform with real-time analytics, post scheduling, and multi-platform integration. Features include user profiles, messaging, and content management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/your-username/social-dashboard",
    live_demo_link: "https://your-social-dashboard.vercel.app",
  },
  {
    name: "Task Management System",
    description:
      "A collaborative project management tool with real-time updates, team collaboration features, drag-and-drop task boards, and progress tracking. Perfect for agile development teams.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/your-username/task-management",
    live_demo_link: "https://your-task-manager.vercel.app",
  },
  {
    name: "Real Estate Platform",
    description:
      "A full-featured real estate platform with property listings, advanced search filters, virtual tours, mortgage calculator, and agent management system. Includes map integration and user reviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "blue-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
    source_code_link: "https://github.com/your-username/real-estate-platform",
    live_demo_link: "https://your-realestate-demo.vercel.app",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="project-card-container"
    >
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden group'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        <div className='mt-4 flex gap-3'>
          <button
            onClick={() => window.open(live_demo_link, "_blank")}
            className='bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300'
          >
            Live Demo
          </button>
          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className='border border-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-400 transition-all duration-300'
          >
            View Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="roadway-container mt-20">
        <div className="roadway-line"></div>
        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

const WrappedWorks = SectionWrapper(Works, "work")
WrappedWorks.displayName = 'Works'

export default WrappedWorks
