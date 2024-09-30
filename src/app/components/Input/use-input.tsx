import {
  ChangeEventHandler,
  KeyboardEventHandler,
  LegacyRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { commandMap, inputLength } from '../../utils/constants';
import { ComponentContext } from '../../utils/context';
import { getFullSuggestion, getSuggestion } from '../../utils/helper';
import Invalid from '../Invalid';
import StaticInput from '../StaticInput';

export default function useInput({ cmd }: { cmd: string }) {
  const { components, setComponents, history, setHistory } =
    useContext(ComponentContext);
  const ref = useRef<LegacyRef<HTMLInputElement> | undefined>();
  const [index, setIndex] = useState(0);
  const [command, setCommand] = useState<string>(cmd || '');
  const [suggestion, setSuggestion] = useState('');

  // focus on the field on the render and focus on click
  useEffect(() => {
    const focus = () => ref?.current?.focus();
    focus();
    document.addEventListener('click', focus);

    () => {
      document.removeEventListener('click', focus);
    };
  }, []);

  // After loading new components above it scroll to the input
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [components]);

  const handleKeys: KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.target.style.width = inputLength(command);

    // clear screen
    if ((e.ctrlKey || e.metaKey) && e.code === 'KeyL') {
      e.preventDefault();
      setComponents([]);
    }

    // autocomplete
    if (e.key.toLowerCase() === 'tab') {
      e.preventDefault();

      const suggested = getFullSuggestion(command);
      if (suggested) {
        e.target.style.width = inputLength(suggested);
        setCommand(suggested);
        setSuggestion('');
      }
    }

    // handle arrow keys
    if (
      e.key.toLowerCase() === 'arrowup' ||
      e.key.toLowerCase() === 'arrowdown'
    ) {
      setCommand(history[index]);
      e.target.style.width = inputLength(history[index]);
      if (e.key.toLowerCase() === 'arrowup') {
        setIndex((i) => (i > 0 ? i - 1 : 0));
      } else {
        setIndex((i) => (i + 1 < history.length ? i + 1 : history.length - 1));
      }
    }

    if (e.key.toLowerCase() === 'enter') {
      // handle submit
      setComponents((v: any) => [
        ...v,
        // static input with entered command
        () => <StaticInput command={command} />,
        // if valid command that new component
        commandMap[command]
          ? commandMap[command]
          : () => <Invalid command={command} />,
      ]);
      setIndex(history.length);
      setHistory((h: string[]) => [...h, command]);
      setCommand('');
      setSuggestion('');
    }
  };

  const handleCommandChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const typedCommand = e.target.value;
    setCommand(typedCommand);
    setSuggestion(getSuggestion(typedCommand));
  };

  return { handleCommandChange, handleKeys, suggestion, command, ref };
}
