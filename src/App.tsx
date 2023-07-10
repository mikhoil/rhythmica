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
import { MyCollectionPage } from './pages/MyCollectionPage/MyCollectionPage';
import { NewsPage } from './pages/NewsPage/NewsPage';
import { SignInPage } from './pages/SignInPage/SignInPage';

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Outlet />}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/my-collection"
                        element={<MyCollectionPage />}
                    />
                    <Route path="/news" element={<NewsPage />} />
                </Route>
                <Route path="register" element={<SignUpPage />} />
                <Route path="login" element={<SignInPage />} />
            </Route>,
        ),
    );
    return <RouterProvider router={router} />;
}

export default App;
