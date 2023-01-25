import React from 'react'

const Skill = (props) => {
  return (
    <div className='bg-white/75 dark:bg-darkPurple/[.85] rounded-full flex justify-between w-max py-2 ss:py-4 px-4 ss:px-6 items-center mr-5'>
      {
        props.svgPath && props.svgViewBox ?
        <svg className='
          fill-darkGrey dark:fill-white
          h-6 ss:h-9 mr-4'
          viewBox={props.svgViewBox}>
          <path d={props.svgPath} />
        </svg> : null
      }
      <div className='text-darkGrey dark:text-white text-lg ss:text-2xl '>
        {props.name}
      </div>
    </div>
  )
}

export default Skill