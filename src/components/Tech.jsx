import React from 'react'
import { motion } from 'framer-motion'

import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-10'
      >
        Here are the technologies and tools I use to build modern,
        scalable applications. From frontend frameworks to backend
        databases, I'm proficient in the full development stack.
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div 
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className='w-28 h-28 tech-ball-container'
            title={technology.name}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

const WrappedTech = SectionWrapper(Tech, "tech")
WrappedTech.displayName = 'Tech'

export default WrappedTech
