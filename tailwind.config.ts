import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        highlight: 'rgb(var(--highlight))',
        link: 'rgb(var(--link))',
        orange: 'rgb(var(--orange))',
        shade: 'rgb(var(--shade))',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
export default config;
