import About from '../components/About';
import Clear from '../components/Clear';
import Education from '../components/Education';
import Help from '../components/Help';
import Input from '../components/Input';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Theme from '../components/Theme';
import Welcome from '../components/Welcome';

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
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `;

export const suggestions = [
  'welcome',
  'projects',
  'about',
  'education',
  'help',
  'theme',
  'resume',
  'clear',
];

export const commandMap = {
  input: Input,
  welcome: Welcome,
  about: About,
  projects: Projects,
  education: Education,
  help: Help,
  theme: Theme,
  resume: Resume,
  clear: Clear,
};

export const inputLength = (prompt: string) => {
  return (prompt.length + 1) * 10 + 'px';
};

export const RESUME_LINK =
  'https://drive.google.com/uc?export=download&id=1R-ahuKsL9w6er_cuyvb0lTJ2hZ30BGBy';
