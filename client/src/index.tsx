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
            path: "results",
            element: <Main/>
          },
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

