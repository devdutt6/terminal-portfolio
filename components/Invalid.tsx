export default function Invalid({ command }: { command: string }) {
  return (
    <div className=''>
      <p className='mb-4'>
        <span className='font-bold text-red-500'>'{command}'</span>: Invalid
        command / command not found
      </p>{' '}
      For the list of available commands, type
      <span className='text-highlight'> help</span>.
    </div>
  );
}
