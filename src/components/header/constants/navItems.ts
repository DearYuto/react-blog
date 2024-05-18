import { PATH } from '@/components/router/constants/path';
import { COMMON } from '@/constants/common/common';

export const NAV_ITEMS = [
  {
    id: 0,
    title: COMMON.LOGIN_TITLE,
    path: PATH.login,
    role: 'no-user',
  },
  {
    id: 1,
    title: COMMON.DELETE,
    path: PATH.join,
    role: 'no-user',
  },
  {
    id: 2,
    title: COMMON.MYPAGE_TITLE,
    path: PATH.mypage,
    role: 'user',
  },
  {
    id: 3,
    title: COMMON.CREATE_POST,
    path: PATH.write,
    role: 'user',
  },
] as const;
