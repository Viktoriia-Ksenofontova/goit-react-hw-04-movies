import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          exact
          to={routes.home}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
