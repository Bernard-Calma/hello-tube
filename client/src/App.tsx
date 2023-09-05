import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import { getVideo } from "./features/youtube/youtubeSlice";
import { AppDispatch } from "./store";
import Main from "./views/Main/Main";
import { History, Library, LikedVideos, Recommendation, ReportHistory, Subscriptions, VideoList } from "./views/Main/components";
import Settings from "./views/Settings/Settings";
import Account from "./views/Settings/components/Account";
import { Advance, Billing, Notification, Playback, Privacy } from "./views/Settings/components";

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
            <Route path="playlist" element={<LikedVideos />}/>
            <Route path="account" element={<Account />}/>
            <Route path="account_notifications" element={<Notification />}/>
            <Route path="account_playback" element={<Playback />}/>
            <Route path="account_privacy" element={<Privacy />}/>
            <Route path="account_billing" element={<Billing />}/>
            <Route path="account_advance" element={<Advance />}/>
            <Route path="reporthistory" element={<ReportHistory />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
