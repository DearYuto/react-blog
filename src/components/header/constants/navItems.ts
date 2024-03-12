import { PATH } from '@/components/router/constants/path';

export const NAV_ITEMS = [
  {
    id: 0,
    title: '메인',
    path: PATH.root,
  },
  {
    id: 1,
    title: '포스트',
    path: PATH.posts,
  },
  {
    id: 2,
    title: '마이페이지',
    path: PATH.mypage,
  },
] as const;
