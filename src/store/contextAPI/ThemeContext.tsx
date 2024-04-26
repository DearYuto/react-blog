import { createContext } from 'react';
import { ThemeState } from './types/themeTypes';

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => {
    console.warn('setTheme function이 구현되지 않았어요.');
  },
});
