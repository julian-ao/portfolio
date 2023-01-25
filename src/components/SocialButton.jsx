import React from 'react'

const SocialButton = (props) => {
  let svg;
  if (props.svgPath){
    svg = <svg className='
      fill-white dark:fill-darkPurple
      group-hover:fill-darkPurple dark:group-hover:fill-white duration-200
      h-6 w-7 mr-0 md:mr-3'
      viewBox={props.svgViewBox} > // '0 0 500 500'
      <path d={props.svgPath} />
    </svg>
  }

  //props.download ? d = 'download' : d = ''

  let nameStyle
  if (props.svgPath) {
    nameStyle = 'hidden md:block'
  }

  return (
  <a href={props.url} target='_blank' className='
    group
    bg-darkPurple dark:bg-white
    hover:bg-white dark:hover:bg-darkPurple
    text-white dark:text-darkPurple
    hover:text-darkPurple dark:hover:text-white
    duration-200
    drop-shadow-4 rounded-full
    w-max h-9 mr-3 xs:mr-7 px-3 md:px-5
    flex items-center
    select-none'>
    {svg}
    <div className={nameStyle} >
      {props.name}
    </div>
  </a>
  )
}

export default SocialButton