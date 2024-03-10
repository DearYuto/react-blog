import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '@src/App';

import { PATH } from './constants/path';
import { HomePage, PostsPage } from '@src/pages';

export const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <App />,
    children: [
      {
        path: PATH.posts,
        element: <HomePage />,
      },
      {
        path: PATH.post,
        element: <PostsPage />,
      },
    ],
  },
  {
    path: PATH.etc,
    element: <Navigate to={PATH.root} />,
  },
]);
