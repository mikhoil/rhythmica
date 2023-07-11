import { NavLink, Navigate, Outlet, useLocation } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultAvatar.svg';
import styles from './AccountLayout.module.scss';
import { Suspense } from 'react';

export const AccountLayout = () => {
    const { pathname } = useLocation();
    if (pathname === '/me') return <Navigate to={'tracks'} />;
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img
                    className={styles.avatar}
                    src={defaultAvatar}
                    alt=""
                    width={100}
                />
                <div className={styles.userbar}>
                    <h1 className={styles.username}>Имя слушателя</h1>
                    <button className={styles.becomeAuthor}>
                        Стать исполнителем
                    </button>
                </div>
            </header>
            <nav className={styles.nav}>
                <NavLink
                    to={'tracks'}
                    className={({ isActive }) =>
                        `${isActive ? styles.active : ''} ${styles.navlink}`
                    }
                >
                    <div className={styles.text}>Треки</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? styles.active : ''} ${styles.navlink}`
                    }
                    to={'subscriptions'}
                >
                    <div className={styles.text}>Подписки</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? styles.active : ''} ${styles.navlink}`
                    }
                    to={'albums'}
                >
                    <div className={styles.text}>Альбомы</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? styles.active : ''} ${styles.navlink}`
                    }
                    to={'playlists'}
                >
                    <div className={styles.text}>Плейлисты</div>
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${isActive ? styles.active : ''} ${styles.navlink}`
                    }
                    to={'history'}
                >
                    <div className={styles.text}>История</div>
                </NavLink>
            </nav>
            <div className={styles.content}>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    );
};
