import React from 'react'

import NavButton from './NavButton'
import FooterSocialButton from './FooterSocialButton'
import { navPageLinks, navSocialLinks, svgIcons } from '../constants/index.js'
import { scrollToId } from '../functions/scrollToId.js'

const Footer = () => {
  return (
    <div className='w-full h-20 ss:h-28 bg-white/75 dark:bg-darkPurple/50 flex justify-center items-center select-none'>

      {/* NAVIGATION BUTTONS */}
      <div className='w-max h-min flex absolute left-0 xs:left-3 sm:left-5'>
        {
          navPageLinks.map((e) => (
            <NavButton key={e.name} name={e.name} url={e.url} svgPath={e.icon.svgPath} svgViewBox={e.icon.svgViewBox} />
          ))
        }
      </div>

      <div>
        <svg onClick={scrollToId.bind(this, 'navbar')} className='hover:fill-white dark:hover:fill-darkGrey fill-darkGrey dark:fill-white duration-200 h-6 w-auto ss:w-7 mr-0 ss:mr-3 -rotate-90 cursor-pointer' viewBox={svgIcons.arrow.svgViewBox} >
          <path d={svgIcons.arrow.svgPath} />
        </svg>
      </div>

      {/* SOCIAL LINKS */}
      <div className='flex h-min items-center w-max absolute right-2 xs:right-5 sm:right-10'>
        {
          navSocialLinks.map((e) => (
            <FooterSocialButton key={e.name} url={e.url} svgPath={e.icon.svgPath} svgViewBox={e.icon.svgViewBox} />
          ))
        }
      </div>
    </div>
  )
}

export default Footer