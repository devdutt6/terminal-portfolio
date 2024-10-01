import { useContext, useEffect, useState } from 'react';
import { ComponentContext } from '../utils/context';

export default function Theme() {
  const { history } = useContext(ComponentContext);
  const themes = [
    {
      background: '255 255 255',
      foreground: '44 46 49',
      paraText: '139 5 102',
      highlight: '127 90 240',
      orangeColor: '200 146 11',
    },
    {
      background: '0 0 0',
      foreground: '2 154 1',
      paraText: '193 21 21',
      highlight: '127 90 240',
      orangeColor: '233 207 39',
    },
    {
      background: '47 47 47',
      foreground: '255 255 254',
      paraText: '3 255 82',
      highlight: '111 66 245',
      orangeColor: '204 147 3',
    },
    {
      background: '45 8 34',
      foreground: '255 255 254',
      paraText: '148 161 178',
      highlight: '3 255 82',
      orangeColor: '2 154 1',
    },
    {
      background: '13 14 19',
      foreground: '255 255 254',
      paraText: '148 161 178',
      highlight: '111 66 245',
      orangeColor: '0 221 255',
    },
    {
      background: '0 0 0',
      foreground: '208 208 208',
      highlight: '255 101 0',
      link: '67 121 242',
      orangeColor: '199 152 33',
      shade: '31 31 31',
    },
  ];
  const [theme, setTheme] = useState((history.length + 1) % themes.length);

  useEffect(() => {
    setTheme((history.length + 1) % themes.length);

    document.documentElement.style.setProperty(
      '--background',
      themes[theme].background
    );
    document.documentElement.style.setProperty(
      '--foreground',
      themes[theme].foreground
    );
    document.documentElement.style.setProperty(
      '--highlight',
      themes[theme].highlight
    );
    document.documentElement.style.setProperty(
      '--link',
      themes[theme].orangeColor
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
