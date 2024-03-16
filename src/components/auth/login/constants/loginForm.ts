import { FormInputType } from '@/types/auth/form';

export const LOGIN_FORM: FormInputType[] = [
  {
    id: 0,
    name: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 1,
    name: 'password',
    label: '이메일',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요.',
  },
] as const;
