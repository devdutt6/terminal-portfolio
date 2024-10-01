import useInput from './use-input';

export default function Input({ command: cmd }: { command?: string }) {
  const { command, handleCommandChange, handleKeys, suggestion, ref } =
    useInput({ cmd: cmd || '' });

  return (
    <div className='flex no-wrap py-1'>
      <span className='text-orange tracking-wide sm:mr-1'>visitor</span>@
      <span className='text-highlight tracking-wide ml-1 hidden sm:inline'>
        terminal.devdutt
      </span>
      <span className='tracking-wide mr-1'>:~$</span>
      <input
        name='commandInput'
        autoComplete='off'
        autoCorrect='false'
        autoFocus={true}
        type='text'
        ref={ref}
        value={command}
        onChange={handleCommandChange}
        onKeyDown={handleKeys}
        className={`bg-transparent outline-none border-none disabled:bg-transparent read-only:bg-transparent ${
          !command && 'w-full'
        }`}
      />
      <span className='opacity-50'>{suggestion}</span>
    </div>
  );
}
