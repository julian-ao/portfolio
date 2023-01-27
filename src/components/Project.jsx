import React from 'react'

import { useState, useEffect, useRef } from 'react'

import { svgIcons } from '../constants/index.js'

import ProjectTechnology from './ProjectTechnology'

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
    <div className='group bg-darkGrey h-72 rounded-2xl bg-cover drop-shadow-xl
      hover:drop-shadow-none duration-200 cursor-pointer relative overflow-hidden'
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} >

      {/* GRADIENT */}
      <a href={props.url} target='_blank' className='h-2/5 group-hover:h-full duration-200 w-full bottom-0 absolute ' // backdrop-blur-sm
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(30, 30, 30, 0.9))` }} >

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

          <div ref={divRef} className='text-white text-md '>
            {props.description}
          </div>
        </div>
      </a>

      <a href={props.github} target='_blank' className='bg-darkGreen hover:bg-lightGreen duration-200 rounded-full p-2 absolute top-3 right-3'>
        <svg className='fill-white h-6'
          viewBox={svgIcons.github.svgViewBox}>
          <path d={svgIcons.github.svgPath} />
        </svg>
      </a>

    </div>
  )
}

export default Project