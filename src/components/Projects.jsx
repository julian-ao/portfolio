import React from 'react'

import { svgIcons, projects } from '../constants/index.js'

import Project from './Project'

import Slider from 'react-slick'

import ProjectCarousel from './ProjectCarousel.jsx';

const Projects = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div id='projects' className='flex justify-center mb-40'>
      <div className='bg-white/75 dark:bg-darkPurple/50 w-full md:w-11/12 lg:w-9/12 md:rounded-[48px] flex justify-between items-center px-10'>
        {/*<div className='h-max'>
          <svg className='hover:fill-white dark:hover:fill-darkGrey fill-darkGrey dark:fill-white duration-200 h-6 rotate-180 cursor-pointer' viewBox={svgIcons.arrow.svgViewBox} >
            <path d={svgIcons.arrow.svgPath} />
          </svg>
        </div>*/}
        <div className='w-full pt-5 pb-10 ss:p-10'>
          <div className='text-darkGrey dark:text-white text-4xl ss:text-6xl mb-10 font-semibold drop-shadow-4 '> projects </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
            {
              projects.map((e) => (
                <Project key={e.title} title={e.title} description={e.description} url={e.url} github={e.github} imageUrl={e.imageUrl} tags={e.tags} />
              ))
            }
          </div>
        {/*<ProjectCarousel />*/}
        </div>
        {/*<div className='h-max'>
          <svg className='hover:fill-white dark:hover:fill-darkGrey fill-darkGrey dark:fill-white duration-200 h-6 cursor-pointer' viewBox={svgIcons.arrow.svgViewBox} >
            <path d={svgIcons.arrow.svgPath} />
          </svg>
        </div>*/}
      </div>
    </div>
  )
}

export default Projects