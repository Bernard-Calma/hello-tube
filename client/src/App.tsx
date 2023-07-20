import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { 
  Outlet,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { getVideo } from "./features/youtube/youtubeSlice";
import { AppDispatch } from "./store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getVideo())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
