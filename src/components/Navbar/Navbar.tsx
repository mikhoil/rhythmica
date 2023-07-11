import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                }
                to={'/'}
            >
                Главная
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                }
                to={'/me'}
            >
                Моя коллекция
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.active : styles.inactive
                }
                to={'/news'}
            >
                Новости
            </NavLink>
        </nav>
    );
};
