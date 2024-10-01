import { useContext, useEffect } from 'react';
import { ComponentContext } from '../utils/context';

export default function Clear() {
  const { setComponents } = useContext(ComponentContext);

  useEffect(() => {
    setComponents([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
