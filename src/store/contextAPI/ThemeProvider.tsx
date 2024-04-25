// TODO 파일 분리

import { createContext, Dispatch, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeState>({
  theme: 'light',
  setTheme: () => {
    console.warn('setTheme function이 구현되지 않았어요.');
  },
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
