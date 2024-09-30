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
      // cardBack: '47 50 55',
      // cursorColor: '0 116 44',
    },
    {
      background: '0 0 0',
      foreground: '2 154 1',
      paraText: '193 21 21',
      highlight: '127 90 240',
      orangeColor: '233 207 39',
      // cardBack: '0 0 0',
      // cursorColor: '0 113 44',
    },
    {
      background: '47 47 47',
      foreground: '255 255 254',
      paraText: '3 255 82',
      highlight: '111 66 245',
      orangeColor: '204 147 3',
      // cardBack: '61 56 56',
      // cursorColor: '254 212 0',
    },
    {
      background: '45 8 34',
      foreground: '255 255 254',
      paraText: '148 161 178',
      highlight: '3 255 82',
      orangeColor: '2 154 1',
      // cardBack: '63 33 54',
      // cursorColor: '2 154 1',
    },
    {
      background: '13 14 19',
      foreground: '255 255 254',
      paraText: '148 161 178',
      highlight: '111 66 245',
      orangeColor: '0 221 255',
      // cardBack: '21 22 26',
      // cursorColor: '2 154 1',
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
  }, []);

  return <></>;
}
