import { Link } from 'react-router-dom';

import './styles/header.scss';

import { PATH } from '../router/constants/path';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">유토의 하루</h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav-item">
            <Link to={PATH.root}>메인</Link>
          </li>
          <li className='"header__nav-item"'>
            <Link to={PATH.posts}>포스트</Link>
          </li>
          <li className='"header__nav-item"'>
            <Link to={PATH.mypage}>마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
