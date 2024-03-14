import { Outlet } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';

import './styles/main.scss';

export default function RootLayout() {
  return (
    <div className="light-theme">
      <Header />
      <section className="section">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
