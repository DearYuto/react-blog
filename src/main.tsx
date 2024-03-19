import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import QueryProvider from './store/tanstackQuery/QueryProvider';
import AuthProvider from './store/contextAPI/AuthProvider';

import { router } from './components/router';
import Spinner from './components/loading/Spinner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);
