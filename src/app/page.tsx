'use client';

import { useState } from 'react';
import Input from './components/Input';
import StaticInput from './components/StaticInput';
import Welcome from './components/Welcome';
import { ComponentContext } from './utils/context';

export default function Home() {
  const [components, setComponents] = useState<(() => JSX.Element)[]>([
    () => <StaticInput command='welcome' />,
    Welcome,
  ]);
  const [history, setHistory] = useState<string[]>([]);

  return (
    <ComponentContext.Provider
      value={{ components, setComponents, history, setHistory }}
    >
      <div className='@container items-center '>
        {components.map((V, i) => (
          <V key={i} />
        ))}
        <Input />
      </div>
    </ComponentContext.Provider>
  );
}
