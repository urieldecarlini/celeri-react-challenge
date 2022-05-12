import { useEffect, useState } from 'react';
import { defaultTheme } from '../themes';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

const useTheme = () => {
  const [themeMode, setThemeMode] = useState(null);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setThemeMode(theme);
    }
  }, []);

  useEffect(() => {
    if (themeMode === 'dark') {
      setTheme(darkTheme);
    } else if (themeMode === 'light') {
      setTheme(lightTheme);
    }
  }, [themeMode]);

  //   const toggleTheme = () => {
  //     if (themeMode === 'light') {
  //       setThemeMode('dark');
  //       localStorage.setItem('theme', 'dark');
  //     } else {
  //       setThemeMode('light');
  //       localStorage.setItem('theme', 'light');
  //     }
  //   };

  return theme;
};

export default useTheme;
