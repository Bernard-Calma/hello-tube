import { 
  Outlet
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return(
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
