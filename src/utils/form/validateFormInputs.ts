import { toast } from 'react-toastify';

import { Form } from '@/hooks/form/useMyForm';

import { isEmpty } from '../isEmpty';

export const validateFormInputs = (formInputs: Form) => {
  if (isEmpty(formInputs.title)) {
    toast.error('제목을 입력해주세요.');
    return false;
  }

  if (isEmpty(formInputs.content)) {
    toast.error('내용을 입력해주세요.');
    return false;
  }

  return true;
};
