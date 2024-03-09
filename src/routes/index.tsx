import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import { PATH } from './constants/path';

export const router = createBrowserRouter([
  {
    path: PATH.root,
    element: <App />,
  },
]);
