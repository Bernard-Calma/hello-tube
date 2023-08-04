import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import { store } from './store';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import Main from './views/Main/Main';
import Show from './views/Show/Show';
import path from 'path';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "Liked Videos"
          },
          {
            path: "feed",
            children: [
              {path: "subscription"},
              {path: "library"},
              {path: "history"},
              {path: "storefront"}
            ]
          }
        ]
      },
      {
        path: "watch/:videoId",
        element: <Show /> 
      },
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

