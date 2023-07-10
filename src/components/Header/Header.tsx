import { Logo } from '../Logo/Logo';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <Logo />
            <Navbar />
            <Search />
            <Profile />
        </header>
    );
};
