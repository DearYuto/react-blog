import { HTMLInputAutoCompleteAttribute } from 'react';

interface IPattern {
  value: RegExp;
  message: string;
}

export type FormInputType = {
  id: number;
  name: 'email' | 'password' | 'rePassword';
  label: string;
  type: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  errorMessage?: string;
  regexp?: RegExp;
  placeholder?: string;
  pattern?: IPattern;
};
