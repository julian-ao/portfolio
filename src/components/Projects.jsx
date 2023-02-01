import React from 'react'

import { svgIcons, projects } from '../constants/index.js'

import Project from './Project'

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
      <div className='dark:bg-white/25 bg-lightPurple/25 w-full md:w-11/12 lg:w-9/12 md:rounded-[48px] flex flex-col justify-between items-center px-10'>
        {/*<div className='h-max'>
          <svg className='hover:fill-white dark:hover:fill-darkGrey fill-darkGrey dark:fill-white duration-200 h-6 rotate-180 cursor-pointer' viewBox={svgIcons.arrow.svgViewBox} >
            <path d={svgIcons.arrow.svgPath} />
          </svg>
        </div>*/}
        <div className='w-full pt-5 pb-10 ss:p-10'>
          <div className='dark:text-washedYellow text-4xl ss:text-6xl mb-10 font-semibold drop-shadow-4 '> projects </div>
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
        <a href='https://github.com/Jotto2' target='_blank'
          className='group border-[1.5px] dark:border-washedYellow border-darkBlue ss:dark:hover:bg-washedYellow ss:hover:bg-darkBlue ss:dark:hover:border-washedYellow duration-200 rounded-full flex align-center p-3 mb-10 w-[135px] h-[49px]'>
          <svg className='dark:fill-washedYellow fill-darkBlue ss:dark:group-hover:fill-darkGrey ss:group-hover:fill-white h-6 mr-2'
            viewBox={svgIcons.github.svgViewBox}>
            <path d={svgIcons.github.svgPath} />
          </svg>
          <div className='dark:text-washedYellow text-darkBlue ss:dark:group-hover:text-darkGrey ss:group-hover:text-white w-max'>
            View more
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects