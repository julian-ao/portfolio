import React from 'react'

const SocialButton = (props) => {
  let svg;
  if (props.svgPath){
    svg = <svg className='
      dark:fill-washedYellow fill-darkBlue
      dark:group-hover:fill-darkGrey group-hover:fill-white
      duration-200
      h-6 w-7 mr-0 md:mr-3'
      viewBox={props.svgViewBox} >
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
    border-[1.5px]
    dark:border-washedYellow border-darkBlue
    dark:hover:bg-white hover:bg-darkBlue
    dark:hover:text-darkGrey hover:text-white
    dark:hover:border-white hover:border-darkBlue
    dark:text-washedYellow
    duration-200
    rounded-full
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