import { postMenuItem, TabLabel } from './constants/menuItems';

type Props = {
  activeTab: TabLabel;
  onClick: (label: TabLabel) => () => void;
};
export default function PostMenu({ activeTab, onClick }: Props) {
  return (
    <ul className="post-menu">
      {postMenuItem.map((menu) => {
        return (
          <li
            onClick={onClick(menu.title)}
            className={`post-menu__item ${
              activeTab === menu.title ? 'post-menu__item--active' : ''
            }`}
            key={menu.id}
          >
            {menu.title}
          </li>
        );
      })}
    </ul>
  );
}
