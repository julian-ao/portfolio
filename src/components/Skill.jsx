import React from 'react'

const Skill = (props) => {

  let hasIcon = props.svg != null
  let hasText = props.name != null

  let nameText = hasText ? props.name : null

  let nameStyling = 'text-darkGrey dark:text-white text-lg ss:text-2xl'

  hasIcon && hasText ? nameStyling += ' ml-2 ss:ml-4' : null

  return (
    <div className='bg-white/75 dark:bg-darkPurple/[.85] rounded-full flex justify-between w-max py-2 ss:py-4 px-4 ss:px-6 items-center mr-5'>
      {
        props.svg != null ?
          props.svg.svgPath && props.svg.svgViewBox ?
            <svg className='
              fill-darkGrey dark:fill-white
              h-6 ss:h-9'
              viewBox={props.svg.svgViewBox}>
              <path d={props.svg.svgPath} />
            </svg>
          : null
        : null
      }
      <div className={nameStyling}>
        {nameText}
      </div>
    </div>
  )
}

export default Skill