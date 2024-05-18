import { toast } from 'react-toastify';

import { Form } from '@/hooks/form/useMyForm';

import { isEmpty } from '../isEmpty';
import { MESSAGES } from '@/constants/common/messages';

export const validateFormInputs = (formInputs: Form) => {
  if (isEmpty(formInputs.title)) {
    toast.error(MESSAGES.REQUIRED_TITLE);
    return false;
  }

  if (isEmpty(formInputs.content)) {
    toast.error(MESSAGES.REQUIRED_CONTENTS);
    return false;
  }

  return true;
};
