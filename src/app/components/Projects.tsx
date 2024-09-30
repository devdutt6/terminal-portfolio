const projects = [
  {
    title: 'disbot (Discord Bot)',
    description:
      'A discord bot with rich features like a task management, reminders, apply for a leave, share TODT, share your status in organization, etc.',
    links: [
      {
        url: 'https://github.com/devdutt6/disbot',
        platform: 'GitHub',
      },
    ],
  },
  {
    title: 'aoctemplate',
    description:
      'A npm library for one of the most followed coding compitition called "Advent Of Code".',
    links: [
      {
        url: 'https://github.com/devdutt6/aoctemplate',
        platform: 'GitHub',
      },
      {
        url: 'https://npmjs.com/package/aoctemplate',
        platform: 'NPM',
      },
    ],
  },
];

export default function Projects() {
  return (
    <ul className='flex justify-center flex-col gap-2'>
      {projects.map((project, index) => (
        <li key={index}>
          <div className='mb-2 text-xl font-semibold tracking-wide'>
            {index + 1}.&nbsp;
            {project.title}
          </div>
          <div className='mb-2'>{project.description}</div>
          <div>
            {project.links.map((link, ind) => {
              return (
                <a
                  href={link.url}
                  target='_blank'
                  key={ind}
                  className='text-link block'
                >
                  {link.platform} (
                  <span className='text-foreground underline'>{link.url}</span>)
                  {/* &#8599; */}
                </a>
              );
            })}
          </div>
        </li>
      ))}
    </ul>
  );
}
