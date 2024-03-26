import { useState } from 'react';

export type Form = {
  [key: string]: string;
};

export const useMyForm = (initialState: Form) => {
  const [formInputs, setFormInputs] = useState(initialState);

  const onChangeFormInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [id]: value }));
  };

  return { formInputs, setFormInputs, onChangeFormInput };
};
