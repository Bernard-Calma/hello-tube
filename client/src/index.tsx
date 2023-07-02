import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import './index.css';
import App from './App';
import Video from './views/Video/components/Video';
import Main from './views/Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main /> 
      },
      {
        path: "watch/:videoId",
        element: <Video /> 
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

