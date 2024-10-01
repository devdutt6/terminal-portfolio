const courses = [
  'Data Structures & Algorithms',
  'Database Management System',
  'Computer Networking',
  'Discrete Mathematics',
  'Operating System',
  'Computer Architecture',
];

export default function Education() {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center flex-wrap'>
          <p>
            Bachelors of Engineering in{' '}
            <span className='font-bold'>Computer Engineering</span>
          </p>
          <p className=''>2018 ~ 2022</p>
        </div>
        <div className='flex justify-between items-center flex-wrap'>
          <p>L J Institutes of Engineering and Technology</p>
          <p>8.7/10.0</p>
        </div>
      </div>
      <h2 className='text-2xl tracking-wide font-semibold mt-6'>Course Work</h2>
      <hr />
      <div className='flex flex-col mt-2'>
        {courses.map((v) => (
          <p className='py-1' key={v}>
            -- {v}
          </p>
        ))}
      </div>
    </>
  );
}
