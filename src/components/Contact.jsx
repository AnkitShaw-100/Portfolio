import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // EmailJS configuration - you'll need to replace these with your actual values
    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: 'Ankit Shaw',
          from_email: form.email,
          to_email: 'ankitshaw6933@gmail.com',
          message: form.message,
        },
        'your_public_key' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)
          alert('Ahh, something went wrong. Please try again.')
        }
      )
  }

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#151030] transition-all duration-300'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        <div className='mt-8 flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center'>
              <span className='text-white font-bold'>📧</span>
            </div>
            <div>
              <p className='text-white font-medium'>Email</p>
              <p className='text-secondary'>ankitshaw6933@gmail.com</p>
            </div>
          </div>
          
          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center'>
              <span className='text-white font-bold'>📱</span>
            </div>
            <div>
              <p className='text-white font-medium'>Phone</p>
              <p className='text-secondary'>+91 6291219530</p>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <div className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center'>
              <span className='text-white font-bold'>📍</span>
            </div>
            <div>
              <p className='text-white font-medium'>Location</p>
              <p className='text-secondary'>Kolkata, India</p>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <p className='text-white font-medium mb-4'>Connect with me</p>
          <div className='flex gap-4'>
            <a
              href='https://github.com/AnkitShaw-100'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center hover:bg-[#7c3aed] transition-colors duration-300'
            >
              <span className='text-white font-bold'>GH</span>
            </a>
            <a
              href='https://www.linkedin.com/in/ankit-shaw-884b0728a/'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center hover:bg-[#7c3aed] transition-colors duration-300'
            >
              <span className='text-white font-bold'>LI</span>
            </a>
            <a
              href='https://twitter.com/AnkitShaw750'
              target='_blank'
              rel='noopener noreferrer'
              className='w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center hover:bg-[#7c3aed] transition-colors duration-300'
            >
              <span className='text-white font-bold'>TW</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, 'contact')
WrappedContact.displayName = 'Contact'

export default WrappedContact
