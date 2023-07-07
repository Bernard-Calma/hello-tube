import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { 
  Outlet,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { getVideos } from "./features/youtube/youtubeSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getVideos())
  },[])
  return(
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App;
