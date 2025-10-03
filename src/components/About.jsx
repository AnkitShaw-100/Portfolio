import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a Full Stack Developer with expertise in modern web technologies.
        I build complete web applications from frontend to backend, creating
        efficient and user-friendly solutions.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <div key={service.title} className='xs:w-[250px] w-full service-card-container'>
            <motion.div
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:scale-105 transition-transform duration-300'
            >
              <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-opacity-80 transition-all duration-300'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, "about")
WrappedAbout.displayName = 'About'

export default WrappedAbout
