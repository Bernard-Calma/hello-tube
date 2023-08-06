import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { getVideo } from "./features/youtube/youtubeSlice";
import { AppDispatch } from "./store";
import Main from "./views/Main/Main";
import { History, Library, Recommendation, Subscriptions, VideoList } from "./views/Main/components";

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
            <Route path="/" element={<>
              <Recommendation />
              <VideoList/>
            </>}/>
            <Route path="feed/Subscription" element={<Subscriptions />}/>
            <Route path="feed/Library" element={<Library />}/>
            <Route path="feed/History" element={<History />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
