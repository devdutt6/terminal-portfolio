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
    () => {
      window.removeEventListener('resize', setElement);
    };
  }, []);

  return (
    <ComponentContext.Provider
      value={{ components, setComponents, history, setHistory }}
    >
      <div id='centerIt' className='flex-1'>
        {components.map((V, i) => (
          <V key={i} />
        ))}
        <Input />
      </div>
    </ComponentContext.Provider>
  );
}
