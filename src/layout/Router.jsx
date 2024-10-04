import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import MainLayout from './MainLayout';

export const SearchPage = lazy(() => import('./../pages/search/Search'));
export const SearchResultPage = lazy(() => import('./../pages/searchResult/SearchResult'));

export default function Router() {
    const routes = useRoutes([
        {
            element: (<MainLayout>
                <Suspense fallback={<h3 style={{ padding: 30 }}>Please wait...</h3>}>
                    <Outlet />
                </Suspense>
            </MainLayout>),
            children: [
                // { element: <SearchPage />, index: true },
                // { index: true, path: "search", element: <SearchPage /> },
                { index: true, path: "search-result", element: <SearchResultPage /> },
                { path: "*", element: <h1>404 | Not found!</h1> },
            ]
        },
        {
            index:true,
            element: <SearchPage />,
        },
        {
            index:true,
            path: 'search',
            element: <SearchPage />,
        }
    ]);
    return routes;
}