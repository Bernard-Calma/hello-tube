import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './views/Main/Main';
import Video from './views/Video/components/Video';

const router = createBrowserRouter([{
  path: "/",
  element: <Main />
},{
  path: "watch/:videoId",
  element: <Video />
}
])

const App: React.FC = () => {
  return(
    <div className='App'>
      <Header />
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
