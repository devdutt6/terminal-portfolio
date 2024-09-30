const LINES = [
  {
    line: 'Hi, my name is Devdutt!',
  },
  {
    line: "I'm Software Developer/full-stack developer based in Gujarat.",
  },
  {
    line: 'I love playing volleyball and in competitive in nature.',
  },
  {
    line: 'Currently focusing on developing problem solving skill with DSA(Data Structures and Algorithms).',
  },
];

export default function About() {
  return (
    <div>
      {LINES.map((line, index) => (
        <p key={index}>{line.line}</p>
      ))}
    </div>
  );
}
