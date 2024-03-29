import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';

import Header from './components/header';
import Footer from './components/footer';

export default function RootLayout() {
  return (
    <div className="light-theme">
      <ToastContainer autoClose={2_000} hideProgressBar />
      <Header />
      <section className="section">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
}
