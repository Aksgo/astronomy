"use client"
import '../../globals.css'
import React, { useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Hero from '../../../../public/Hero.png'
import star from '../../../../public/star.png'
import ParticleEffect from '@/app/Animations/ParticleEffect'
import { motion } from "framer-motion"
import Link from 'next/link'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const heroVariants = {
  visible: {
    x: [-30, 30, -30],
    y: [-30, 30, -30],
    transition: { repeat: Infinity, delay: 0.1, duration: 5 },
  }
}
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
}

const Home = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 pt-24">
        <div className="text-center md:text-left max-w-2xl md:mt-20">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            <span className={roboto.className}>Step into the Wonders of the Astronomy Club!</span>
          </h1>
          <p className="text-white text-sm sm:text-lg mt-4">
            <span className={roboto.className}>Unveiling the Mysteries of the Universe,</span>
          </p>
          <p className="text-white text-sm sm:text-lg">
            <span className={roboto.className}>We are the <span className="text-gradient font-bold">Astronomy</span> club of IIT BHU.</span>
          </p>

          <Link href='/pages/Activities'>
            <button className="bg-gradient-to-r from-white to-slate-400 rounded-md w-full sm:w-[130px] mt-6 px-4 py-2 text-black font-bold text-lg">
              Explore
            </button>
          </Link>

          <p className="text-white text-lg sm:text-xl mt-6">Who Are We?</p>
          <p className="text-white text-sm sm:text-lg mt-4 leading-relaxed">
            The Astronomy Club, IIT (BHU) Varanasi, is a passionate community of space enthusiasts, aspiring astrophysicists, and stargazers. 
            We explore the universe through observational sessions, astrophotography, workshops, and research projects. Whether you're a seasoned astronomer or just curious, join us as we reach for the stars! 🌌
          </p>
        </div>

        <div className='flex items-center justify-center h-[50vh] md:h-screen container w-[80vw] md:w-[45vw] mr-4 md:mr-[70px]'>
        <div className='bg-particle'>
            <ParticleEffect />
          </div>
          <motion.div
            className='image-hero'
            variants={heroVariants}
            animate="visible"
          >
            <Image src={Hero} height={300} width={300} alt="hero" />
          </motion.div>
        </div>
      </div>

      <motion.div className="container mx-auto px-4 mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2 className="text-white text-center text-xl sm:text-3xl font-bold">What Do We Do?</h2>
        <motion.ul className="mt-6 space-y-4 text-white text-sm sm:text-lg px-4 sm:px-20">
          {[
            "🔭 Observational Sessions -  We regularly organize night sky observation events where members can observe planets, star clusters, nebulae, and galaxies through high-powered telescopes.These sessions help students understand celestial navigation, constellations, and real-time  astronomical phenomena like eclipses, meteor showers, and planetary transits.", 
            "📷 Astrophotography - We capture breathtaking images of celestial objects, including the Moon, planets, and deep-space objects like nebulae and galaxies. Members learn image processing and the use of specialized equipment to document the beauty of the cosmos.",
            "🚀 The Rocket Team - Our team works on designing, simulating, and launching model rockets, experimenting with aerodynamics, propulsion systems, and payloads. We conduct hands-on sessions where students build and test their own rockets, applying fundamental physics and engineering concepts.",
            "🛰 Satellite Team - We research and develop small satellite projects, focusing on CubeSats. Members get to work on hardware design, software programming, and real-world space applications, preparing them for future opportunities in space technology and exploration."
          ].map((text, index) => (
            <motion.li key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="mt-12 bg-gradient-to-r from-black to-green-500 p-3">
        <marquee className="text-white font-bold text-lg">Welcome to the Astronomy Club! Join us in exploring the universe with exciting events and activities.</marquee>
      </div>

      <div className="fixed top-0 left-0 pointer-events-none" style={{ transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`, zIndex: 1000 }}>
          <Image src={star} alt="Star Cursor" width={30} height={30} />
      </div>
    </div>
  )
}

export default Home
