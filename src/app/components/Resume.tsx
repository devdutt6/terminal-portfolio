import { useEffect } from 'react';
import { RESUME_LINK } from '../utils/constants';

export default function Resume() {
  useEffect(() => {
    window.open(RESUME_LINK, '_blank');
  }, []);
  return <></>;
}
