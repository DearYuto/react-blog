import { useNavigate } from 'react-router-dom';

import { IPost } from '@/api/post/getPosts';

import { PATH } from '../router/constants/path';

import Post from '../blog/post';

type Props = {
  posts: (IPost & { id: string })[];
};

export default function Posts({ posts }: Props) {
  const navigate = useNavigate();

  return (
    <>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            createAt={post.createAt}
            onClick={() => {
              navigate(`${PATH.posts}/${post.id}`);
            }}
          />
        );
      })}
    </>
  );
}
