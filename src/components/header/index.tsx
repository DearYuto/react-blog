import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { NAV_ITEMS } from './constants/navItems';
import { PATH } from '../router/constants/path';

import { AuthContext } from '@/store/contextAPI/AuthProvider';
import { COMMON } from '@/constants/common/common';

export default function Header() {
  const { user, isLoading } = useContext(AuthContext);

  const filteredMenu = user
    ? NAV_ITEMS.filter((item) => item.role === 'user')
    : NAV_ITEMS.filter((item) => item.role === 'no-user');

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">
          <Link className="header__logo" to={PATH.root}>
            <img src="/blog-logo.svg" alt="logo" />
            <span aria-label="u-log">{COMMON.TITLE}</span>
          </Link>
        </h1>
        {isLoading ? (
          <></>
        ) : (
          <ul className="header__nav--list">
            {filteredMenu.map((nav) => {
              return (
                <li key={nav.id} className="header__nav-item">
                  <Link to={nav.path}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
