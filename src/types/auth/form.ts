import { HTMLInputAutoCompleteAttribute } from 'react';

interface IPattern {
  value: RegExp;
  message: string;
}

type InputType = 'email' | 'password' | 'rePassword';

export type FormInputType = {
  id: number;
  name: InputType;
  label: string;
  type: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  errorMessage?: string;
  regexp?: RegExp;
  placeholder?: string;
  pattern?: IPattern;
};
