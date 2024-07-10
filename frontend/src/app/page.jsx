'use client'
import React from 'react'
import Contact from './(Components)/contact/page'
import Experience from './(Components)/experience/page'
import Skills from './(Components)/skills/page'
import Hero from './(Components)/hero/hero'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage