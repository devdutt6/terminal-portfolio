export default function StaticInput({ command }: { command?: string }) {
  return (
    <div className='flex no-wrap py-1'>
      <span className='text-orange tracking-wide sm:mr-1'>visitor</span>@
      <span className='text-highlight tracking-wide ml-1 hidden sm:inline'>
        terminal.devdutt
      </span>
      <span className='tracking-wide mr-1'>:~$</span>
      <input
        name='commandInput'
        value={command}
        readOnly={true}
        type='text'
        className='bg-transparent outline-none border-none disabled:bg-transparent read-only:bg-transparent'
      />
    </div>
  );
}
