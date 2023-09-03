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
import { History, Library, LikedVideos, Subscriptions } from './views/Main/components';

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
            path: "playlist",
            element: <LikedVideos />,
          },{
            path: "react"
          },{
            path: "javascript"
          },{
            path: "python"
          },{
            path: "sass"
          },{
            path: "gaming"
          },{
            path: "podcast"
          },{
            path: "feed",
            children: [
              {
                path: "subscription",
                element: <Subscriptions />
              },
              {
                path: "library",
                element: <Library />
              },
              {
                path: "history",
                element: <History />
              },
              {path: "trending"},
              {path: "storefront"},
            ]
          },{
            path: "channel",
            children: [
              {path: "shopping"},
              {path: "music"},
              {path: "live"},
              {path: "news"},
              {path: "sports"},
              {path: "learning"},
              {path: "sports"},
              {path: "fashion"}
            ]
          }
        ]
      },
      {
        path: "account",
      },
      {
        path: "account_notifications"
      },
      {
        path: "reporthistory"
      },
      {
        path: "about"
      },
      {
        path: "contactme"
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

