import React from 'react'

import { svgIcons } from '../constants/index.js'

const ProjectGithubLink = (props) => {
  return (
    <a href={props.github} target='_blank' className='group dark:bg-washedYellow bg-darkBlue ss:hover:bg-darkGrey ss:dark:hover:bg-white border-[1.5px] ss:hover:border-darkGrey border-darkBlue dark:border-washedYellow ss:dark:hover:border-white duration-200 rounded-full p-2 absolute top-3 right-3'>
      <svg className='dark:fill-darkGrey fill-white duration-200 h-6'
        viewBox={svgIcons.github.svgViewBox}>
        <path d={svgIcons.github.svgPath} />
      </svg>
    </a>
  )
}

export default ProjectGithubLink