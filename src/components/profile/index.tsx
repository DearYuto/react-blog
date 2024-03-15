import { Link } from 'react-router-dom';
import { PATH } from '../router/constants/path';

export default function Profile() {
  return (
    <section className="profile">
      <header className="profile__header">
        <h2 className="profile__title">내 프로필</h2>
      </header>

      <div className="profile__contents">
        <img className="profile__img" src="#" alt="프로필 이미지" />
        <div>
          <span className="profile__email">이메일</span>
          <span className="profile__nickname">닉네임</span>
        </div>
      </div>

      <footer className="profile__footer">
        <Link className="profile__logout" to={PATH.root}>
          로그아웃
        </Link>
      </footer>
    </section>
  );
}
