import { FormInputType } from '@/types/auth/form';

export const LOGIN_FORM: FormInputType[] = [
  {
    id: 0,
    name: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일을 입력해주세요.',
    errorMessage: '이메일 형식으로 입력해주세요.',

    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: '이메일 형식으로 입력해주세요.',
    },
  },
  {
    id: 1,
    name: 'password',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    errorMessage: '비밀번호는 8자리 이상(특수문자, 대문자, 숫자)으로 입력해주세요.',

    pattern: {
      value: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
      message: '비밀번호는 8자리 이상(특수문자, 대문자, 숫자)으로 입력해주세요.',
    },
  },
] as const;
