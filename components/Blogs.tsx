import { BLOG } from '@/utils/constants';
import { useEffect } from 'react';

export default function Blogs() {
  useEffect(() => {
    window.open(BLOG, '_blank');
  }, []);
  return <></>;
}
