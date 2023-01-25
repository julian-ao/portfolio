import React from 'react'

import Background from './components/Background'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-inter overflow-hidden' >
      {/*<Background />*/}
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