import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Player } from '../Player/Player';
import styles from './Layout.module.scss';

export const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <Player />
        </>
    );
};
