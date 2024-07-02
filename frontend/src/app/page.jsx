'use client'
import React from 'react'
import Contact from './(Components)/contact/page'
import Experience from './(Components)/experience/page'
import Skills from './(Components)/skills/page'

const HomePage = () => {
  return (
    <div>
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}

export default HomePage