import React from 'react'

import Background from './components/Background'
import JSBackground from './components/JSBackground'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

import useWindowDimensions from './hooks/useWindowDimensions';

const App = () => {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height

  return (
    <div className='font-inter overflow-hidden' >
      {/*<Background />*/}
      <JSBackground windowWidth={windowWidth} windowHeight={windowHeight} />
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