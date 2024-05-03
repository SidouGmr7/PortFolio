import { Navigate, useRoutes } from 'react-router-dom';

import HomePage from 'src/pages/home';
import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
