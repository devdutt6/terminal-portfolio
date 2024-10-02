import { SKILLS } from '@/utils/constants';
import { useEffect } from 'react';

export default function Technologies() {
  useEffect(() => {
    window.open(SKILLS, '_blank');
  }, []);
  return <></>;
}
