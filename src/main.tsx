import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import QueryProvider from './store/tanstackQuery/QueryProvider';
import AuthProvider from './store/contextAPI/AuthProvider';

import { router } from './components/router';
import ThemeProvider from './store/contextAPI/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>
);
