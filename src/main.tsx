import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import QueryProvider from './store/tanstackQuery/QueryProvider';
import AuthProvider from './store/contextAPI/AuthProvider';

import { router } from './components/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);
