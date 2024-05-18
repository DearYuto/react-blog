import { ERROR_MESSAGES, MESSAGES } from '@/constants/common/messages';
import { FormInputType } from '@/types/auth/form';

export const LOGIN_FORM: FormInputType[] = [
  {
    id: 0,
    name: 'email',
    label: '이메일',
    type: 'email',
    placeholder: MESSAGES.REQUIRED_EMAIL,
    errorMessage: ERROR_MESSAGES.INVALID_EMAIL_FORMAT,
    autoComplete: 'email',

    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: ERROR_MESSAGES.INVALID_EMAIL_FORMAT,
    },
  },
  {
    id: 1,
    name: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: MESSAGES.REQUIRED_PASSWORD,
    errorMessage: ERROR_MESSAGES.INVALID_PASSWORD_FORMAT,
    autoComplete: 'current-password',

    pattern: {
      value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
      message: ERROR_MESSAGES.INVALID_PASSWORD_FORMAT,
    },
  },
] as const;
