import { toast } from 'react-toastify';

export const isEmpty = (target: string) => target === '';

export const isEmptyInput = (input: string, message?: string) => {
  if (!input) {
    toast.error(message ?? '빈 값은 입력할 수 없어요.');
    return true;
  }

  return false;
};
