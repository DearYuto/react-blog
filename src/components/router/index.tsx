import React, { Suspense } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PATH } from './constants/path';

import RootLayout from '@/layout';
import PostDetailPage from '@/pages/postDetail';
import Spinner from '../loading/Spinner';

const ProtectedRoutes = React.lazy(() => import('./protected/ProtectedRoutes'));
const JoinPage = React.lazy(() => import('@/pages/auth/join'));
const LoginPage = React.lazy(() => import('@/pages/auth/login'));
const Mypage = React.lazy(() => import('@/pages/mypage'));
const WritePage = React.lazy(() => import('@/pages/write'));
const PostsPage = React.lazy(() => import('@/pages/posts'));

export const router = createBrowserRouter([
  {
    path: PATH.root,
    element: (
      <Suspense fallback={<Spinner />}>
        <RootLayout />
      </Suspense>
    ),
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

      /* ****** PROTECTED - 비로그인 ******* */
      {
        element: <ProtectedRoutes role="no-user" redirectionPath={PATH.root} />,
        children: [
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

      /* ****** PROTECTED - 로그인 유저만 진입 ******* */
      {
        element: <ProtectedRoutes role="user" redirectionPath={PATH.login} />,
        children: [
          {
            path: PATH.write,
            element: <WritePage mode="create" />,
          },
          {
            path: PATH.modify,
            element: <WritePage mode="modify" />,
          },
          {
            path: PATH.mypage,
            element: <Mypage />,
          },
        ],
      },
    ],
  },
  {
    path: PATH.etc,
    element: <Navigate to={PATH.root} />,
  },
]);
