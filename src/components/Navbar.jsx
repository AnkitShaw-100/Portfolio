import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
      className={`w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 ${
        scrolled ? "navbar-glassmorphism" : "navbar-transparent"
      } transition-all duration-500`}
    >
      <div className="w-full" style={{paddingLeft: '10%', paddingRight: '10%'}}>
        <div className="flex items-center justify-between w-full">
          {/* Section 1: Logo & Brand - Far Left */}
          <div className="flex items-center flex-1">
            <Link
              to="/"
              className="flex items-center gap-3 sm:gap-4"
              onClick={() => {
                setActive("")
                window.scrollTo(0, 0) 
              }}
            >
              <img 
                src={logo} 
                alt="logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain logo-glow" 
              />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold cursor-pointer">
                  Ankit
                </p>
                <span className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[16px] font-light tracking-wide">
                  Full Stack Developer
                </span>
              </div>
            </Link>
          </div>

          {/* Section 2: Navigation Links - Far Right */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <ul className="list-none flex flex-row items-center gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`nav-link-clean ${
                    active === nav.title ? "text-white" : "text-gray-300"
                  } hover:text-white text-[15px] lg:text-[16px] xl:text-[17px] font-medium cursor-pointer transition-colors duration-300`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`} className="relative py-2 px-1">
                    {nav.title}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                      active === nav.title ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end flex-1 ml-4">
            <button
              className="p-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
              onClick={() => setToggle(!toggle)}
            >
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-6 h-6 object-contain filter brightness-0 invert"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`${
            !toggle 
              ? "opacity-0 pointer-events-none translate-y-[-20px]" 
              : "opacity-100 pointer-events-auto translate-y-0"
          } md:hidden absolute top-full left-4 right-4 mt-3 p-6 black-gradient rounded-xl transition-all duration-300 ease-in-out shadow-xl border border-gray-700/50 backdrop-blur-md`}
        >
          <ul className="list-none flex flex-col gap-3">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white transition-all duration-200 hover:transform hover:translateX-2 py-3 px-3 rounded-lg hover:bg-gray-700/30 border-l-2 ${
                  active === nav.title ? "border-purple-500" : "border-transparent"
                } hover:border-purple-400`}
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
