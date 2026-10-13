import { Outlet } from 'react-router-dom';
import InstitutionalBanner from '../components/InstitutionalBanner/InstitutionalBanner';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MainLayout() {
  return (
    <>
      <InstitutionalBanner />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
