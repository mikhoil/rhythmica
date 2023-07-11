import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
    return (
        <Link to={'/'} className={styles.logo}>
            <img src={logo} alt="" />
        </Link>
    );
};
