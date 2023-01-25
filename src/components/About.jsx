import React from 'react'

import { aboutText, frontendSkills, backendSkills, devToolsSkills } from '../constants/index.js'

import SkillsTrain from './SkillsTrain'

const About = () => {
  return (
    <div className='flex flex-col mb-20' >
      <div className='flex flex-col items-center ss:mb-10' >
        {/* ABOUT TEXT */}
        <div className='text-white w-4/5 lg:w-3/5 mb-12 ss:mb-20' id='about' >
          <h1 className='text-4xl ss:text-6xl font-semibold drop-shadow-4 ' > { aboutText.title } </h1>
          <br></br>
          <p className='text-lg ss:text-2xl leading-8 ss:leading-10' > { aboutText.paragraph } </p>
          <br></br>
          <p className='text-lg ss:text-2xl' > { aboutText.paragraph2 } </p>
        </div>
      </div>

      {/* SKILLS */}
      <SkillsTrain skills={frontendSkills} direction='left' title='frontend' />
      <SkillsTrain skills={backendSkills} direction='right' title='backend' />
      <SkillsTrain skills={devToolsSkills} direction='left' title='dev tools' />
      {/*
      <div>
        Backend
      </div>
      <SkillsTrain direction='right' />
      <div>
        Developer tools
      </div>
  <SkillsTrain direction='left' />*/}

    </div>
  )
}

export default About