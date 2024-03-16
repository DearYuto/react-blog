import { Navigate, createBrowserRouter } from 'react-router-dom';

import { PATH } from './constants/path';

import { JoinPage, LoginPage, Mypage, PostsPage, WritePage } from '@/pages';
import RootLayout from '@/layout';
import PostDetailPage from '@/pages/postDetail';
import ProtectedRoutes from './protected/ProtectedRoutes';

import { getAuth } from 'firebase/auth';
import { firebaseApp } from '@/services/firebase/firebaseConfig';

const user = getAuth(firebaseApp);

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

      /* ****** PROTECTED - 비로그인 ******* */
      {
        element: (
          <ProtectedRoutes redirectionCondition={!!user.currentUser} redirectionPath={PATH.root} />
        ),
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
        element: (
          <ProtectedRoutes redirectionCondition={!user.currentUser} redirectionPath={PATH.login} />
        ),
        children: [
          {
            path: PATH.write,
            element: <WritePage />,
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
