import { PATH } from '@/components/router/constants/path';

export const NAV_ITEMS = [
  {
    id: 0,
    title: '로그인',
    path: PATH.login,
    role: 'no-user',
  },
  {
    id: 1,
    title: '회원가입',
    path: PATH.join,
    role: 'no-user',
  },
  {
    id: 2,
    title: '마이페이지',
    path: PATH.mypage,
    role: 'user',
  },
  {
    id: 3,
    title: '새 글 작성',
    path: PATH.write,
    role: 'user',
  },
] as const;
