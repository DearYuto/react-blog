import { Link } from 'react-router-dom';

import { PATH } from '@/components/router/constants/path';

export default function PostsPage() {
  return (
    <div>
      {[
        Array(20)
          .fill(0)
          .map((_, i) => {
            return (
              <div key={i}>
                <Link to={`${PATH.posts}/${i}`}>포스트 {i}</Link>
              </div>
            );
          }),
      ]}
    </div>
  );
}
