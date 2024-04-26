import { SetStateAction } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeState {
  theme: Theme;
  setTheme: React.Dispatch<SetStateAction<Theme>>;
}
