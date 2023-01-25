import React from 'react'

import SocialButton from './SocialButton'
import NavButton from './NavButton'
import { navPageLinks, navSocialLinks } from '../constants/index.js'

import ThemeIcon from './ThemeIcon';

const Navbar = () => {
  return (
    <div className='flex justify-center text-lg mb-36 ss:mb-44 xs:mb-56 select-none' id='navbar'>
      <div className='bg-white/75 dark:bg-darkPurple/50 w-full fixed backdrop-blur ss:w-11/12 flex justify-between flex-row h-14 xs:h-16 mt-0 ss:mt-4 items-center rounded-none ss:rounded-3xl z-10'>

        {/* NAVIGATION BUTTONS */}
        <div className='w-max h-min flex'>
          {
            navPageLinks.map((e) => (
              <NavButton key={e.name} name={e.name} url={e.url} svgPath={e.icon.svgPath} svgViewBox={e.icon.svgViewBox} />
            ))
          }
        </div>

        <div className='flex h-min items-center'>

          {/* SOCIAL LINKS */}
          <div className='flex w-max'>
            {
              navSocialLinks.map((e) => (
                <SocialButton key={e.name} name={e.name} url={e.url} svgPath={e.icon.svgPath} svgViewBox={e.icon.svgViewBox} />
              ))
            }
          </div>

          {/* THEME SWITCH */}
          <div className='ml-2 mr-5 xs:ml-0 xs:mr-7'>
            <ThemeIcon />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar