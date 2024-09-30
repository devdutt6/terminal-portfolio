import { useEffect } from 'react';

export default function Blogs() {
  useEffect(() => {
    window.open('https://devdutt-portfolio.vercel.app/blogs', '_blank');
  }, []);
  return <></>;
}
