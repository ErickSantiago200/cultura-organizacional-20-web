import { Link } from 'react-router-dom';
import { siteName } from '../../content/navigation';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__brand">{siteName}</p>
        <p className="site-footer__links">
          <Link to="/">Inicio</Link>
        </p>
        <p className="site-footer__copyright">
          © {year} {siteName}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
