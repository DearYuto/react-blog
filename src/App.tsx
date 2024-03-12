import { Outlet } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import './styles/main.scss';

function App() {
  return (
    <div className="light-theme">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
