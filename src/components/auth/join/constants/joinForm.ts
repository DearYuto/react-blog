import { FormInputType } from '@/types/auth/form';
import { LOGIN_FORM } from '../../login/constants/loginForm';

export const JOIN_FORM: FormInputType[] = [
  ...LOGIN_FORM,
  {
    id: 2,
    name: 'rePassword',
    type: 'password',
    label: '비밀번호 확인',
    errorMessage: '비밀번호가 일치하지 않습니다.',
  },
] as const;
