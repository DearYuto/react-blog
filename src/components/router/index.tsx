import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PATH } from './constants/path';

import App from '@/App';
import { JoinPage, LoginPage, Mypage, PostsPage, WritePage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <App />,
    children: [
      {
        path: PATH.posts,
        element: <PostsPage />,
      },
      {
        path: PATH.write,
        element: <WritePage />,
      },
      {
        path: PATH.mypage,
        element: <Mypage />,
      },
      {
        path: PATH.login,
        element: <LoginPage />,
      },
      {
        path: PATH.join,
        element: <JoinPage />,
      },
    ],
  },
  {
    path: PATH.etc,
    element: <Navigate to={PATH.root} />,
  },
]);
