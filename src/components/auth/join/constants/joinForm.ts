import { FormInputType } from '@/types/auth/form';
import { LOGIN_FORM } from '../../login/constants/loginForm';
import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';
import { COMMON } from '@/constants/common/common';

export const JOIN_FORM: FormInputType[] = [
  ...LOGIN_FORM,
  {
    id: 2,
    name: 'rePassword',
    type: 'password',
    label: COMMON.PASSWORD_CONFIRM,
    placeholder: MESSAGES.PASSWORD_CONFIRM,
    errorMessage: ERROR_MESSAGES.PASSWORD_MISMATCH,
  },
] as const;
