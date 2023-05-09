import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Error from '../../pages/Error';
import Profile from '../../pages/Profile';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root outlet={<Error />} />,
    children: [
      {
        path: 'profile/:userId',
        element: <Profile />,
      },
      {
        path: 'error',
        element: <Error />,
      },
    ],
  },
]);
