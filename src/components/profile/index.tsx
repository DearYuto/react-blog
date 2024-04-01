import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';

import { PATH } from '../router/constants/path';

import { firebaseApp } from '@/services/firebase/firebaseConfig';

export default function Profile() {
  const auth = getAuth(firebaseApp);

  const onClickLogout = async () => {
    try {
      await signOut(auth);
      toast.success('👋 또 만나요!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="profile">
      <header className="profile__header">
        <h2 className="profile__title">내 프로필</h2>
      </header>

      <div className="profile__contents">
        <img className="profile__img" src="#" alt="프로필 이미지" />
        <div>
          <span className="profile__email">{auth.currentUser?.email}</span>
          <span className="profile__nickname">{'유저'}</span>
        </div>
      </div>

      <footer className="profile__footer">
        <Link onClick={onClickLogout} className="profile__logout" to={PATH.root}>
          로그아웃
        </Link>
      </footer>

      <div>
        <h3>내가 작성한 글</h3>
      </div>
    </section>
  );
}
