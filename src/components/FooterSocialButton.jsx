import React from 'react'

const FooterSocialButton = (props) => {
  return (
    <a href={props.url} target='_blank' className='group duration-200 flex items-center ml-4 xs:ml-7'>
      <svg className='
      ss:dark:group-hover:fill-white ss:group-hover:fill-white
      dark:fill-washedYellow fill-darkBlue
      duration-200 h-6 w-auto ss:w-7 mr-0 ss:mr-3'
      viewBox='0 0 600 500'>
        <path d={props.svgPath} />
      </svg>
    </a>
  )
}

export default FooterSocialButton