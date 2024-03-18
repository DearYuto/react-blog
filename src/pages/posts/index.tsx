import { Link } from 'react-router-dom';

import { getPosts } from '@/api/post/getPosts';

import Post from '@/components/blog/post';
import PostMenu from '@/components/blog/postMenu';
import { PATH } from '@/components/router/constants/path';
import { useQuery } from '@tanstack/react-query';
import Spinner from '@/components/loading/Spinner';

export default function PostsPage() {
  const { data: posts, isFetching } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
    initialData: [],
  });

  if (isFetching) {
    return <Spinner />;
  }

  const onClickPost = () => {};

  return (
    <div>
      <PostMenu />
      <div className="posts__container">
        {posts.map((post, i) => {
          return (
            <Link key={post.id} to={`${PATH.posts}/${i}`}>
              <Post
                title={post.title}
                content={post.content}
                author={post.author}
                createAt={post.createAt}
                onClick={onClickPost}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
