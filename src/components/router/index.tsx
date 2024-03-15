import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PATH } from './constants/path';

import { JoinPage, LoginPage, Mypage, PostsPage, WritePage } from '@/pages';
import RootLayout from '@/layout';
import PostDetailPage from '@/pages/postDetail';

export const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <RootLayout />,
    children: [
      {
        path: PATH.root,
        element: <PostsPage />,
      },
      {
        path: PATH.posts,
        element: <PostsPage />,
      },
      {
        path: PATH.post,
        element: <PostDetailPage />,
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
