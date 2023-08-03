import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { 
  Outlet, Route, Routes,
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { getVideo } from "./features/youtube/youtubeSlice";
import { AppDispatch } from "./store";
import Main from "./views/Main/Main";
import { Subscriptions } from "./views/Main/components";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getVideo())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return(
    <div className='App'>
      <Header />
      {/* <Outlet /> */}
      <Routes>
        <Route path="/" element={<Main />}>
            <Route path="feed/Subscriptions" element={<Subscriptions />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
