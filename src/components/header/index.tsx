import { Link } from 'react-router-dom';

import './styles/header.scss';

import { NAV_ITEMS } from './constants/navItems';

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">유토의 하루</h1>
      <nav className="header__nav">
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
