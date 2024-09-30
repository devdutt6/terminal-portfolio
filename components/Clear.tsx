import { useContext, useEffect } from 'react';
import { ComponentContext } from '../utils/context';

export default function Clear() {
  const { setComponents } = useContext(ComponentContext);

  useEffect(() => {
    setComponents([]);
  }, []);

  return <></>;
}
