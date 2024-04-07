import { Auth } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';

import { postKeys } from '@/constants/queryKeys/posts';
import { getMyPosts } from '@/api/mypage/getMyPosts';

const fetchMyPosts = (auth: Auth) => {
  if (!auth.currentUser?.email) {
    throw new Error('email이 존재하지 않습니다.');
  }

  return getMyPosts(auth.currentUser?.email);
};

export const useMyPostsQuery = (auth: Auth) => {
  return useQuery({
    queryKey: postKeys.list('myPosts'),
    queryFn: () => fetchMyPosts(auth),
    enabled: !!auth.currentUser?.email,
  });
};
