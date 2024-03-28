import { useQuery } from '@tanstack/react-query';

import { getPost } from '@/api/post/getPost';
import { postKeys } from '@/constants/queryKeys/posts';

export const usePostQuery = (id: string) => {
  const {
    data: post,
    isFetching,
    error,
    isError,
    status,
  } = useQuery({
    queryKey: postKeys.detail(id),
    queryFn: () => getPost(id),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return { post, isFetching, status, error, isError };
};
