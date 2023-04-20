import React from 'react'

import { useState, useEffect, useRef } from 'react'

import { svgIcons } from '../constants/index.js'

import ProjectTechnology from './ProjectTechnology'
import ProjectGithubLink from './ProjectGithubLink'

const Project = (props) => {

  const divRef = useRef(null);
  const [descriptionHeight, setDescriptionHeight] = useState();

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setDescriptionHeight(divRef.current.getBoundingClientRect().height);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setDescriptionHeight(divRef.current.getBoundingClientRect().height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setDescriptionHeight(divRef.current.getBoundingClientRect().height);
  };

  return (
    <div className='group bg-darkGrey h-52 xs:h-[22rem] rounded-2xl bg-cover drop-shadow-xl duration-200 cursor-pointer relative overflow-hidden bg-top'
      style={{ backgroundImage: `url(${props.imageUrl})` }} >

      {/* GRADIENT */}
      <a href={props.url} target='_blank' className='group h-3/5 ss:group-hover:h-full duration-200 w-full bottom-0 absolute '
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(30, 30, 30, 0.9))` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >

        {/* TEXT */}
        <div id='ya' className={'absolute p-2'}
          style={{ bottom: `${isHovered ? 0 : -descriptionHeight - 3}px`, transition: 'all 0.2s ease-in-out', }}>

          <div className='text-white text-2xl '>
            {props.title}
          </div>

          <div className='flex mb-1 my-1'>
            {
              props.tags.map((e) => (
                <ProjectTechnology key={props.title + e.name} name={e.name} icon={e.icon} />
              ))
            }
          </div>

          <div ref={divRef} className='text-white text-md hidden ss:block'>
            {props.description}
          </div>
        </div>
      </a>

      <ProjectGithubLink github={props.github} />
    </div>
  )
}

export default Project