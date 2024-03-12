import { PATH } from '@/components/router/constants/path';

export const NAV_ITEMS = [
  {
    id: 0,
    title: '로그인',
    path: PATH.login,
    role: 'none',
  },
  {
    id: 1,
    title: '회원가입',
    path: PATH.join,
    role: 'none',
  },
  {
    id: 2,
    title: '마이페이지',
    path: PATH.mypage,
    role: 'user',
  },
] as const;
