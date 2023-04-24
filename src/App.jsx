import React from 'react'

import BackgroundDark from './components/BackgroundDark'
import BackgroundLight from './components/BackgroundLight'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

import useWindowDimensions from './hooks/useWindowDimensions';

import { inject } from '@vercel/analytics';

inject();

const App = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <div className='font-inter overflow-hidden w-full hl-transparent' >
      <BackgroundDark windowWidth={windowWidth} windowHeight={windowHeight} />
      <BackgroundLight windowWidth={windowWidth} windowHeight={windowHeight} />
      <React.StrictMode>
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Footer />
      </React.StrictMode>
    </div>
  )
}

export default App