import { useState, useEffect } from 'react';
import { accentColorsSet } from '../constants/constants';

export const useAccentColor = () => {
  const isBrowser = typeof window !== 'undefined';

  const localStorageAccentColor = !isBrowser
    ? 'purple'
    : localStorage.getItem('accentColor')
    ? JSON.parse(localStorage.getItem('accentColor'))
    : 'purple';
  console.log('LocalStoragedAccentColor', localStorageAccentColor);

  const [accentColor, setAccentColor] = useState(localStorageAccentColor);

  useEffect(() => {
    changeAccentColor(accentColor);
  }, [accentColor]);

  return [accentColor, setAccentColor];
};

function changeAccentColor(color) {
  console.log(color);

  accentColorsSet.forEach(color =>
    document.documentElement.classList.remove(`accent-${color}`)
  );

  document.documentElement.classList.add(`accent-${color}`);
  localStorage.setItem('accentColor', JSON.stringify(color));

  //   if (newColor) {
  //     document.documentElement.classList.add(newColor);
  //     localStorage.setItem('accentColor', JSON.stringify(newColor));
  //   }
}