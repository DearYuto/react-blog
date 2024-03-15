import { useState } from 'react';
import { postMenuItem } from './constants/menuItems';

export default function PostMenu() {
  const [isActive, setIsActive] = useState(0);

  const onClickMenuItem = (id: number) => () => {
    setIsActive(id);
  };

  return (
    <ul className="post-menu">
      {postMenuItem.map((menu) => {
        return (
          <li
            onClick={onClickMenuItem(menu.id)}
            className={`post-menu__item ${isActive === menu.id ? 'post-menu__item--active' : ''}`}
            key={menu.id}
          >
            {menu.title}
          </li>
        );
      })}
    </ul>
  );
}
