import About from '@/components/About';
import Blogs from '@/components/Blogs';
import Clear from '@/components/Clear';
import Education from '@/components/Education';
import Help from '@/components/Help';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Technologies from '@/components/Technologies';
import Theme from '@/components/Theme';
import Welcome from '@/components/Welcome';

export const NAME = `
     _                      _           _     _
    | |                    | |         | |   | |
  __| |   ___  __   __   __| |  _   _  | |_  | |_
/  _  |  / _ \\ \\ \\ / /  / _  | | | | | | __| | __|
| (_| | |  __/  \\ V /  | (_| | | |_| | | |_  | |_
 \\____|  \\___|   \\_/    \\__,_|  \\__,_|  \\__|  \\__|
  `;

export const PHOTO = `
              ,##,,eew,
            ,##############C
         a###############@##
        7####^\`^"7W7^"@####
        @#@b\`         ^@#@^
         ##^,,,,   ,,,,^#^
        ,,@######"#######=
         .''555"\` '5555b|.
         T"@ ,,,,^,,,,,*T
            %p ~~\`~~'#\`
             ^Wp @,#T
            :b''%ww7b^}
         ,^ 6$& \` 'b 3- i
     .<\` 'p   ^v   #   b  &*.
   {      }   #"GpGb   [   QQ|}
   C yyyy 3 * @#######Nl  hhhhh#
      `;

export const suggestions = [
  'welcome',
  'projects',
  'about',
  'education',
  'help',
  'technologies',
  'blogs',
  'theme',
  'resume',
  'clear',
];

export type elementMap = {
  welcome: () => JSX.Element;
  projects: () => JSX.Element;
  about: () => JSX.Element;
  education: () => JSX.Element;
  help: () => JSX.Element;
  technologies: () => JSX.Element;
  blogs: () => JSX.Element;
  theme: () => JSX.Element;
  resume: () => JSX.Element;
  clear: () => JSX.Element;
};

export const commandMap: Record<keyof elementMap, () => JSX.Element> = {
  welcome: Welcome,
  projects: Projects,
  about: About,
  education: Education,
  help: Help,
  technologies: Technologies,
  blogs: Blogs,
  theme: Theme,
  resume: Resume,
  clear: Clear,
};

export const inputLength = (prompt: string) => {
  return (prompt.length + 1) * 10 + 'px';
};

export const RESUME_LINK =
  'https://drive.google.com/uc?export=download&id=1RII6llNMbBZHIuWp53GU3M6SWnoeEgSO';
export const DEPLOYED_LINK = 'https://terminal-portfolio-drab.vercel.app/';
export const MAIN = 'https://devdutt-portfolio.vercel.app/';
export const ABOUT = MAIN + 'about';
export const BLOG = MAIN + 'blogs';
export const PROJECTS = MAIN + 'projects';
export const SKILLS = MAIN + 'skills';
