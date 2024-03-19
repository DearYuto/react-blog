import { useQuery } from '@tanstack/react-query';

import { getPosts } from '@/api/post/getPosts';

import PostMenu from '@/components/blog/postMenu';
import Spinner from '@/components/loading/Spinner';
import Posts from '@/components/posts';
import NoData from '@/components/noData';

export default function PostsPage() {
  const { data: posts, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    initialData: [],
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <PostMenu />
      <div className="posts__container">
        {posts.length > 0 ? <Posts posts={posts} /> : <NoData />}
      </div>
    </>
  );
}
