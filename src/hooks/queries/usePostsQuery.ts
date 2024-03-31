import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/api/post/getPosts';
import { TabLabel } from '@/components/blog/postMenu/constants/menuItems';
import { postKeys } from '@/constants/queryKeys/posts';

type QueryProps = TabLabel;

export const usePostsQuery = (tabLabel: QueryProps) => {
  const { data: posts, isFetching } = useQuery({
    queryKey: postKeys.list(tabLabel as unknown as string),
    queryFn: () => getPosts(),
    initialData: [],
    refetchOnWindowFocus: false,
  });

  return { posts, isFetching };
};
