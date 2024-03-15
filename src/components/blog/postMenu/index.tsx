import { useState } from 'react';
import { postMenuItem } from './constants/menuItems';

export default function PostMenu() {
  const [isSeleted, setIsSeleted] = useState(0);

  const onClickMenuItem = (id: number) => () => {
    setIsSeleted(id);
  };

  return (
    <ul className="post-menu">
      {postMenuItem.map((menu) => {
        return (
          <li
            onClick={onClickMenuItem(menu.id)}
            className={isSeleted === menu.id ? 'post-menu__item--selected' : ''}
            key={menu.id}
          >
            {menu.title}
          </li>
        );
      })}
    </ul>
  );
}
