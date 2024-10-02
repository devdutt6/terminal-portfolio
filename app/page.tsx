'use client';

import Input from '@/components/Input';
import StaticInput from '@/components/StaticInput';
import Welcome from '@/components/Welcome';
import { useEffect, useState } from 'react';
import { ComponentContext } from '../utils/context';

export default function Home() {
  const [components, setComponents] = useState<(() => JSX.Element)[]>([
    () => <StaticInput command='welcome' />,
    Welcome,
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [fullScreens, setFullScreen] = useState(false);

  function fullScreen() {
    document.getElementById('centerIt')?.requestFullscreen();
    setFullScreen(true);
  }
  function exitFullScreen() {
    document.exitFullscreen();
    setFullScreen(false);
  }

  useEffect(() => {
    function setElement() {
      const bodyRect = document
        .getElementsByTagName('body')[0]
        .getBoundingClientRect();

      const item = document.getElementById('centerIt')
        ?.parentElement as HTMLDivElement;
      if (bodyRect.height > item?.clientHeight) {
        const h = Number((bodyRect.height - item?.clientHeight) / 2).toFixed(0);
        document
          .getElementsByTagName('body')[0]
          .style.setProperty('padding', `${h}px 0`);
      } else {
        document
          .getElementsByTagName('body')[0]
          .style.setProperty('padding', `0 0`);
      }
    }
    window.addEventListener('resize', setElement);
    setElement();

    return () => {
      window.removeEventListener('resize', setElement);
    };
  }, [history]);

  return (
    <ComponentContext.Provider
      value={{ components, setComponents, history, setHistory }}
    >
      <div id='centerIt' className='flex-1'>
        <div className='flex justify-end gap-4 pr-2'>
          <p
            className={`px-2 py-2 cursor-pointer hover:scale-75 ${
              fullScreens ? 'block' : 'hidden'
            }`}
            onClick={exitFullScreen}
          >
            __
          </p>
          <div
            className={`py-2 cursor-pointer ${
              fullScreens ? 'hidden' : 'block'
            }`}
            onClick={fullScreen}
          >
            <img
              src='expand.svg'
              className='w-6 h-6 stroke-foreground hover:scale-125'
            />
          </div>
        </div>
        <hr className='border-foreground/50' />
        {components.map((V, i) => (
          <V key={i} />
        ))}
        <Input />
      </div>
    </ComponentContext.Provider>
  );
}
