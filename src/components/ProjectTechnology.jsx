import React from 'react'

const ProjectTechnology = (props) => {
  return (
    <div className='w-max bg-darkGrey rounded-full text-white text-xs px-2 py-1 mr-2 flex content-center items-center'>
      <svg className='fill-white h-3 mr-1'
        viewBox={props.icon.svgViewBox}>
        <path d={props.icon.svgPath} />
      </svg>
      {props.name}
    </div>
  )
}

export default ProjectTechnology