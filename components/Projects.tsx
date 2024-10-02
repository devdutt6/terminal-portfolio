import { PROJECTS } from '@/utils/constants';
import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    window.open(PROJECTS, '_blank');
  }, []);

  return <></>;
}
