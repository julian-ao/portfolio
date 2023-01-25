import React from 'react'

import 'jquery-easing'
import { scrollToId } from '../functions/scrollToId.js'

const NavButton = (props) => {

  return (
    <a onClick={scrollToId.bind(this, props.url)} className='group hover:text-white dark:hover:text-darkGrey text-darkGrey dark:text-white duration-200 flex items-center ml-4 xs:ml-7 cursor-pointer'>
      <svg className='group-hover:fill-white dark:group-hover:fill-darkGrey fill-darkGrey dark:fill-white duration-200 h-6 w-auto ss:w-7 mr-0 ss:mr-3' viewBox={props.svgViewBox}> // '0 0 600 500'
        <path d={props.svgPath} />
      </svg>
      <div className='hidden ss:block'>
        {props.name}
      </div>
    </a>
  )
}

export default NavButton