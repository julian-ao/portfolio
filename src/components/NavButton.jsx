import React from 'react'

import 'jquery-easing'
import { scrollToId } from '../functions/scrollToId.js'

const NavButton = (props) => {

  return (
    <a onClick={scrollToId.bind(this, props.url)} className='group ss:dark:hover:text-white ss:hover:text-white dark:text-washedYellow text-darkBlue duration-200 flex items-center ml-4 xs:ml-7 cursor-pointer'>
      <svg className='ss:dark:group-hover:fill-white ss:group-hover:fill-white dark:fill-washedYellow fill-darkBlue duration-200 h-6 w-auto ss:w-7 mr-0 ss:mr-3' viewBox={props.svgViewBox}>
        <path d={props.svgPath} />
      </svg>
      <div className='hidden ss:block'>
        {props.name}
      </div>
    </a>
  )
}

export default NavButton