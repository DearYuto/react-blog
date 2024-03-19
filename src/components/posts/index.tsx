import { Link } from 'react-router-dom';

import { IPost } from '@/api/post/getPosts';

import { PATH } from '../router/constants/path';

import Post from '../blog/post';

type Props = {
  posts: (IPost & { id: string })[];
};

export default function Posts({ posts }: Props) {
  return (
    <>
      {posts.map((post, i) => {
        return (
          <Link key={post.id} to={`${PATH.posts}/${i}`}>
            <Post
              title={post.title}
              content={post.content}
              author={post.author}
              createAt={post.createAt}
            />
          </Link>
        );
      })}
    </>
  );
}
