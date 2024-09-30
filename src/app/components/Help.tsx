const generateSpaces = (spaces: number) => {
  let space = '\xA0\xA0';
  for (let i = 0; i < spaces; i++) space += '\xA0';
  return space;
};

export default function Help() {
  const helper = [
    {
      command: 'about',
      description: 'about Devdutt',
      tab: 8,
    },
    {
      command: 'education',
      description: 'my education background',
      tab: 4,
    },
    {
      command: 'projects',
      description: 'personal projects',
      tab: 5,
    },
    {
      command: 'help',
      description: 'check available commands',
      tab: 9,
    },
    {
      command: 'theme',
      description: 'toggle between different themes',
      tab: 8,
    },
    {
      command: 'resume',
      description: 'here is my resume',
      tab: 7,
    },
    {
      command: 'welcome',
      description: 'display hero section',
      tab: 6,
    },
    {
      command: 'clear',
      description: 'clear the terminal',
      tab: 8,
    },
  ];

  const short = [
    {
      shortcut: 'Tab',
      description: 'autocompletes the command based on input',
      tabs: 11,
    },
    {
      shortcut: 'Up Arrow',
      description: 'go back to previous commands',
      tabs: 6,
    },
    {
      shortcut: 'Down Arrow',
      description: 'go forward in previous commands',
      tabs: 4,
    },
    {
      shortcut: 'Ctrl/cmd + l',
      description: 'clears the terminal',
      tabs: 2,
    },
  ];
  return (
    <>
      <div className='mb-10'>
        <h2 className='text-2xl font-semibold'>Commands</h2>
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
        <h2 className='text-2xl font-semibold'>Short-cuts</h2>
        <hr />
        <dl className='flex flex-col gap-2 ml-4 mt-2'>
          {short.map((shortcut, index) => (
            <div className='flex items-center' key={index}>
              <dt className=''>
                <code className='border-2 border-highlight px-2 rounded-lg'>
                  {shortcut.shortcut}
                </code>
              </dt>
              &nbsp;=&gt;&nbsp;
              <dd>{shortcut.description}</dd>
              <br />
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
