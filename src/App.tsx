import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>사이드바</h1>
      <nav>
        <ul>
          <li>
            <Link to='/posts'>포스트 페이지</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
