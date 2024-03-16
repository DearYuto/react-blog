import Post from '@/components/blog/post';
import PostMenu from '@/components/blog/postMenu';
import { PATH } from '@/components/router/constants/path';
import { Link } from 'react-router-dom';

export default function PostsPage() {
  const onClickPost = () => {};

  return (
    <div>
      <PostMenu />
      {[
        Array(20)
          .fill(0)
          .map((_, i) => {
            return (
              <Link key={i} to={`${PATH.posts}/${i}`}>
                <Post onClick={onClickPost} />
              </Link>
            );
          }),
      ]}
    </div>
  );
}
