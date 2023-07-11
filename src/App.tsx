import {
    Outlet,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './pages/HomePage/HomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { SignInPage } from './pages/SignInPage/SignInPage';
import { lazy } from 'react';
import { AccountLayout } from './components/AccountLayout/AccountLayout';

const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));

const TracksPage = lazy(() => import('./pages/TracksPage/TracksPage'));
const SubscriptionsPage = lazy(
    () => import('./pages/SubscriptionsPage/SubscriptionsPage'),
);
const AlbumsPage = lazy(() => import('./pages/AlbumsPage/AlbumsPage'));
const PlayListsPage = lazy(() => import('./pages/PlayListsPage/PlayListsPage'));
const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Outlet />}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="me" element={<AccountLayout />}>
                        <Route path="tracks" element={<TracksPage />} />
                        <Route
                            path="subscriptions"
                            element={<SubscriptionsPage />}
                        />
                        <Route path="albums" element={<AlbumsPage />} />
                        <Route path="playlists" element={<PlayListsPage />} />
                        <Route path="history" element={<HistoryPage />} />
                    </Route>
                    <Route path="news" element={<NewsPage />} />
                </Route>
                <Route path="register" element={<SignUpPage />} />
                <Route path="login" element={<SignInPage />} />
            </Route>,
        ),
    );
    return <RouterProvider router={router} />;
}

export default App;
