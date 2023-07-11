import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Suspense } from 'react';
import { Player } from '../Player/Player';

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
            <Player />
        </>
    );
};
