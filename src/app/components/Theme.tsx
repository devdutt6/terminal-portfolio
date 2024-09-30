import { useContext, useEffect, useState } from 'react';
import { ComponentContext } from '../utils/context';

export default function Theme() {
  const { history } = useContext(ComponentContext);
  const themes = [
    {
      background: '#eff3f3',
      foreground: '#2c2e31',
      paraText: '#8b0566',
      highlight: '#7f5af0',
      orangeColor: 'rgb(200, 146, 11)',
      // cardBack: '#2f3237',
      // cursorColor: '#00742c',
    },
    {
      background: '#000000',
      foreground: '#029a01',
      paraText: '#c11515',
      highlight: '#7f5af0',
      orangeColor: 'rgb(233, 207, 39)',
      // cardBack: '#000000',
      // cursorColor: '#00712c',
    },
    {
      background: '#2f2f2f',
      foreground: '#fffffe',
      paraText: '#03ff52',
      highlight: '#6f42f5',
      orangeColor: 'rgb(204, 147, 3)',
      // cardBack: '#3d3838',
      // cursorColor: '#fed400',
    },
    {
      background: '#2d0822',
      foreground: '#fffffe',
      paraText: '#94a1b2',
      highlight: '#03ff52',
      orangeColor: '#029a01',
      // cardBack: '#3f2136',
      // cursorColor: '#029a01',
    },
    {
      background: '#0d0e13',
      foreground: '#fffffe',
      paraText: '#94a1b2',
      highlight: '#6f42f5',
      orangeColor: '#00ddff',
      // cardBack: '#15161a',
      // cursorColor: '#029a01',
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
