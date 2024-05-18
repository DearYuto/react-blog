import { ERROR_MESSAGES } from '@/constants/common/messages';
import { toast } from 'react-toastify';

export const isEmpty = (target: string) => target === '';

export const isEmptyInput = (input: string, message?: string) => {
  if (!input) {
    toast.error(message ?? ERROR_MESSAGES.EMPTY_INPUT);
    return true;
  }

  return false;
};
