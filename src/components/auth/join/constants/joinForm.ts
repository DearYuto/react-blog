import { FormInputType } from '@/types/auth/form';
import { LOGIN_FORM } from '../../login/constants/loginForm';

export const JOIN_FORM: FormInputType[] = [
  ...LOGIN_FORM,
  {
    id: 2,
    name: 'rePassword',
    type: 'password',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력해주세요.',
  },
] as const;
