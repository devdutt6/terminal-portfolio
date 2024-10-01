export default function Help() {
  const helper = [
    {
      command: 'about',
      description: 'about me',
    },
    {
      command: 'education',
      description: 'education and course work',
    },
    {
      command: 'projects',
      description: 'personal projects',
    },
    {
      command: 'technologies',
      description: 'list of technologies I have worked with',
    },
    {
      command: 'blogs',
      description: 'list of blogs I tried to post',
    },
    {
      command: 'help',
      description: 'check available commands',
    },
    {
      command: 'theme',
      description: 'toggle between different themes',
    },
    {
      command: 'resume',
      description: 'here is my resume',
    },
    {
      command: 'welcome',
      description: 'display hero section',
    },
    {
      command: 'clear',
      description: 'clear the terminal',
    },
  ];

  const short = [
    {
      shortcut: 'Tab',
      description: 'autocompletes the command based on input',
    },
    {
      shortcut: 'Up Arrow',
      description: 'go back to previous commands',
    },
    {
      shortcut: 'Down Arrow',
      description: 'go forward in previous commands',
    },
    {
      shortcut: 'Ctrl/cmd + l',
      description: 'clears the terminal',
    },
  ];
  return (
    <>
      <div className='mb-10'>
        <h2 className='text-3xl font-semibold'>Commands</h2>
        <hr />
        <dl className='ml-4 mt-2'>
          {helper.map((manual, index) => (
            <div className='flex' key={index}>
              <dt className='text-highlight tracking-wide'>{manual.command}</dt>
              &nbsp;--&nbsp;
              <dd>{manual.description}</dd>
              <br />
            </div>
          ))}
        </dl>
      </div>

      <div className=''>
        <h2 className='text-3xl font-semibold'>Short-cuts</h2>
        <hr />
        <dl className='flex flex-col gap-2 ml-4 mt-2'>
          {short.map((shortcut, index) => (
            <div className='flex items-center' key={index}>
              <dt className='min-w-fit'>
                <code className='border-2 border-highlight px-2 rounded-lg'>
                  {shortcut.shortcut}
                </code>
              </dt>
              &nbsp;=&gt;&nbsp;
              <dd>{shortcut.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
