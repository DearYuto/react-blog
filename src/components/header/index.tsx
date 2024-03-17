import { Link } from 'react-router-dom';

import { NAV_ITEMS } from './constants/navItems';
import { PATH } from '../router/constants/path';

export default function Header() {
  const nonMemberMenu = NAV_ITEMS.filter((item) => item.role === 'none');

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">
          <Link className="header__logo" to={PATH.root}>
            <img src="/blog-logo.svg" alt="logo" />
            <span aria-label="u-log">U-LOG</span>
          </Link>
        </h1>
        <ul className="header__nav--list">
          {nonMemberMenu.map((nav) => {
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
