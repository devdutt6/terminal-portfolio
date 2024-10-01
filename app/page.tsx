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
    const screenH = document
      .getElementsByTagName('body')[0]
      .getBoundingClientRect().height;

    const item = document.getElementById('centerIt')
      ?.parentElement as HTMLDivElement;
    const h = (screenH - item?.clientHeight) / 2;
    item?.style.setProperty('margin-top', `${h}px`);
  }, []);

  return (
    <ComponentContext.Provider
      value={{ components, setComponents, history, setHistory }}
    >
      <div id='centerIt' className='@container'>
        {components.map((V, i) => (
          <V key={i} />
        ))}
        <Input />
      </div>
    </ComponentContext.Provider>
  );
}
