import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Main from './views/Main/Main';

const router = createBrowserRouter([{
  path: "/",
  element: <Main />
},{
  path: "watch"
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
