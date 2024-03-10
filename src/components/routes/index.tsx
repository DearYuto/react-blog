import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '@src/App';
import HomePage from '@src/pages/home';

import { PATH } from './constants/path';

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
        element: <h1>기냥 포스트</h1>,
      },
    ],
  },
  {
    path: PATH.etc,
    element: <Navigate to={PATH.root} />,
  },
]);
