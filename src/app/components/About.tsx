export default function About() {
  return (
    <div>
      <p>-- Hi, I'm Devdutt!, a Software Engineer from Gujarat.</p>
      <h2 className='text-2xl font-semibold my-2'>| Jack of all Trades |</h2>
      <ul className='list-disc flex flex-col gap-2 ml-6'>
        <li className='leading-tight'>
          Results-driven Software Engineer with a strong foundation in backend
          development, microservices architecture, and cloud technologies.
          Passionate about solving challenges and continuously expanding my
          technical skills.
        </li>
        <li className=''>
          Committed to learning new technologies and optimizing system
          performance.
        </li>
        <li className=''>Quick learner and always open to a chat.</li>
        <li className='leading-tight'>
          Loves playing volleyball, learning basketball, watches too much anime,
          favorite one is HAIKYUU. Currently focusing on practising DSA(IYKYK).
        </li>
      </ul>
      <a
        href='https://devdutt-portfolio.vercel.app/about'
        target='_blank'
        className='text-highlight underline underline-offset-4 mt-2 block'
      >
        Click for More...
      </a>
    </div>
  );
}
