import { NAME, PHOTO } from '../utils/constants';

const LINES = [
  {
    line: "Welcome to Devdutt's terminal portfolio.",
  },
  {
    line: '----',
  },
  {
    line: "I'm Devdutt, blah blah lorem blah blah lorem blah blah lorem blah blah lorem blah blah lorem blah blah lorem blah blah lorem.",
  },
];

export default function Welcome() {
  return (
    <div className='flex justify-between'>
      <div>
        <pre className='font-bold'>{NAME}</pre>
        <h1> {LINES[0].line}</h1>
        <p>{LINES[1].line}</p>
        <h2> {LINES[2].line}</h2>
        <br />
        <p>
          For the list of available commands, type
          <span className='text-highlight'> help</span>.
        </p>
      </div>
      <div>
        <pre className='leading-tight'>{PHOTO}</pre>
      </div>
    </div>
  );
}
