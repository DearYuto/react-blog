import { Link } from 'react-router-dom';

import { PATH } from '../router/constants/path';

export default function Header() {
  return (
    <header>
      <h1>사이드바</h1>
      <nav>
        <ul>
          <li>
            <Link to={PATH.root}>메인</Link>
          </li>
          <li>
            <Link to={PATH.posts}>전체 포스트</Link>
          </li>
          <li>
            <Link to={PATH.mypage}>마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
