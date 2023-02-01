import React from 'react'

import useDarkMode from '../hooks/useDarkMode';
import { svgIcons } from '../constants/index.js'

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <svg className='h-6 dark:fill-washedYellow fill-darkBlue ss:dark:hover:fill-white ss:hover:fill-white duration-200 cursor-pointer' viewBox={svgIcons.moon.svgViewBox} >
          <path d={svgIcons.sun.svgPath} ></path>
        </svg>
      ) : (
        <svg className='h-6 dark:fill-washedYellow fill-darkBlue ss:dark:hover:fill-white ss:hover:fill-white duration-200 cursor-pointer' viewBox={svgIcons.sun.svgViewBox} >
          <path d={svgIcons.moon.svgPath} ></path>
        </svg>
      )}
    </span>
  );
};
export default ThemeIcon