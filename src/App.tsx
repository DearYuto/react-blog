import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { PATH } from './components/routes/constants/path';

function App() {
  return (
    <div>
      <h1>사이드바</h1>
      <nav>
        <ul>
          <li>
            <Link to={PATH.root}>메인</Link>
          </li>
          <li>
            <Link to={PATH.posts}>전체 포스트</Link>
          </li>
          <li>
            <Link to={PATH.mypage}>마이페이지</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
