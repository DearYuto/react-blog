import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/api/post/getPosts';
import { postKeys } from '@/constants/queryKeys/posts';

export const usePostsQuery = () => {
  const { data: posts, isFetching } = useQuery({
    queryKey: postKeys.all,
    queryFn: () => getPosts(),
    initialData: [],
    refetchOnWindowFocus: false,
  });

  return { posts, isFetching };
};
