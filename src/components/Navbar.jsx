import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 ${
        scrolled ? "navbar-gradient" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img 
            src={logo} 
            alt="logo" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain logo-glow" 
          />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer flex">
            Ankit
            <span className="hidden sm:inline-block ml-1"> | React Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden md:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`nav-link ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] lg:text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="relative z-10 py-2">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 sm:w-7 sm:h-7 object-contain cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            !toggle 
              ? "opacity-0 pointer-events-none translate-y-[-10px]" 
              : "opacity-100 pointer-events-auto translate-y-0"
          } md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-6 black-gradient rounded-xl transition-all duration-300 ease-in-out shadow-lg border border-gray-800`}
        >
          <ul className="list-none flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white transition-all duration-200 hover:transform hover:translateX-2 py-2 px-2 rounded-lg hover:bg-gray-800/30`}
                onClick={() => {
                  setToggle(false)
                  setActive(nav.title)
                }}
              >
                <a href={`#${nav.id}`} className="block w-full">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
