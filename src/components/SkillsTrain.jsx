import React, { useState, useEffect, useRef, useCallback } from 'react';
import Skill from './Skill';

const SkillsTrain = (props) => {
  const both = [props.skills, props.skills, props.skills];
  const speed = parseFloat(props.speed);
  const [components] = useState(() => both.map((e, i) => ({ id: i, element: e })));
  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(-1);
  const [componentOffset, setComponentOffset] = useState(props.direction === 'left' ? 0 : -divWidth / 3);
  const intervalRef = useRef(null);

  const handleInterval = useCallback(() => {
    setComponentOffset((offset) =>
      props.direction === 'left'
        ? offset < -divWidth / 3
          ? 0
          : offset - speed
        : offset > 0
        ? -divWidth / 3
        : offset + speed
    );
  }, [props.direction, divWidth, speed]);

  useEffect(() => {
    intervalRef.current = setInterval(handleInterval, 10);

    return () => clearInterval(intervalRef.current);
  }, [handleInterval]);

  useEffect(() => {
    if (divRef.current) {
      setDivWidth(divRef.current.getBoundingClientRect().width);
    }
  }, [divRef]);

  return (
    <div className='relative mb-5 ss:mb-10 h-max'>
      <div
        className='text-[1.5rem] ss:text-[2rem] dark:text-washedYellow/90 ml-2 font-semibold dark:drop-shadow-4 drop-shadow-[2px_2px_2px_rgba(255,255,255,0.25)] select-none'>
        {props.title}
      </div>
      <div ref={divRef} className='flex w-max relative mb-5' style={{ left: `${componentOffset}px` }}>
        {components.map((e) => (
          <div key={e.id} className='flex'>
            {e.element.map((i) => (
              <Skill key={i.name + e.id} name={i.name} svg={i.icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTrain;