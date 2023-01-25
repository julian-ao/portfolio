import React from 'react'

import { useState, useEffect, useRef } from 'react'

import Skill from './Skill'

const SkillsTrain = (props) => {

  // TODO randomize the order of the skills in each instance of the component
  // TODO maybe randomize the speed as well?

  const both = [props.skills, props.skills, props.skills];
  const speed = parseFloat(props.speed);
  const [components] = useState(() => both.map((e, i) => ({ id: i, element: e })));
  const divRef = useRef(null);
  let divWidth = -1;
  const [componentOffset, setComponentOffset] = useState(props.direction === 'left' ? 0 : -divWidth / 3);

  useEffect(() => {
    if (divRef.current) {
      divWidth = divRef.current.getBoundingClientRect().width;
    }

    const interval = setInterval(() => {
      setComponentOffset(offset => (props.direction === 'left' ?
        offset < -divWidth / 3 ? 0 : offset - speed : // before :, reset value. after :, offset value
        offset > 0 ? -divWidth / 3 : offset + speed)); // before :, reset value. after :, offset value
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className='relative mb-10 ss:mb-28 h-max'>
    <div className='
      text-[4rem] ss:text-[8.75rem]
      text-darkPurple/90 dark:text-white/90
      font-bold absolute -bottom-1 ss:-bottom-8 w-max
      drop-shadow-4
      select-none'>
      {props.title}
    </div>
    <div ref={divRef} className='flex w-max relative mb-5' style={{ left: `${componentOffset}px` }} >
        {components.map(e => (
          <div key={e.id} className='flex' >
            {e.element.map((i) => (
              e.icon === 'None' ?
              <Skill key={i.name + e.id} name={i.name} /> :
              <Skill key={i.name + e.id} name={i.name} svgPath={i.icon.svgPath} svgViewBox={i.icon.svgViewBox} />
            ))}
          </div>
          ))}
      </div>
  </div>
  )
}

export default SkillsTrain