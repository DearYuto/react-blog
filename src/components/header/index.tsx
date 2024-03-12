import { Link } from 'react-router-dom';

import '@/styles/components/_header.scss';

import { NAV_ITEMS } from './constants/navItems';
import { PATH } from '../router/constants/path';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">
          <Link to={PATH.root}>유토의 하루</Link>
        </h1>
        <ul className="header__nav--list">
          {NAV_ITEMS.map((nav) => {
            return (
              <li key={nav.id} className="header__nav-item">
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
