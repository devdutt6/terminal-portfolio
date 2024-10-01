import { NAME, PHOTO } from '../utils/constants';

export default function Welcome() {
  return (
    <div className='flex flex-col lg:flex-row gap-14'>
      <div className=''>
        <pre className='leading-tight'>{PHOTO}</pre>
      </div>
      <div>
        <pre className='font-bold animate-text'>{NAME}</pre>
        <h1>Welcome to my terminal portfolio.</h1>
        <p>-------------------------------------------</p>
        <h2>
          Hi, I&apos;m Devdutt and this is a portfolio in disguise of a terminal
        </h2>
        <p className='pt-2'>
          Explore and feel free to critique and share it on my @
          <a href='mailto:devduttchudasama1339@gmail.com' className='text-link'>
            email
          </a>
        </p>
        <p className='pt-6'>
          Get started with command
          <span className='text-highlight'> help</span>.
        </p>
      </div>
    </div>
  );
}
