import PostMenu from '@/components/blog/postMenu';
import Spinner from '@/components/loading/Spinner';
import Posts from '@/components/posts';
import NoData from '@/components/noData';

import { usePostsQuery } from '@/hooks/queries/usePostsQuery';

export default function PostsPage() {
  const { posts, isFetching } = usePostsQuery();

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
