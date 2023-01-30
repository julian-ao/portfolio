import React from 'react'

import { useState, useEffect, useRef } from 'react'

import Skill from './Skill'

const SkillsTrain = (props) => {
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
  <div className='relative mb-5 ss:mb-10 h-max'>
    <div className='
      text-[1.5rem] ss:text-[2rem]
      text-white dark:text-white/90
      ml-2
      font-semibold
      dark:drop-shadow-4 drop-shadow-[2px_2px_2px_rgba(255,255,255,0.25)]
      select-none'>
      {props.title}
    </div>
    <div ref={divRef} className='flex w-max relative mb-5' style={{ left: `${componentOffset}px` }} >
        {components.map(e => (
          <div key={e.id} className='flex' >
            {e.element.map((i) => (
              <Skill key={i.name + e.id} name={i.name} svg={i.icon}  />
            ))}
          </div>
          ))}
      </div>
  </div>
  )
}

export default SkillsTrain