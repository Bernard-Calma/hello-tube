import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchQuery } from '../../features/youtube/youtubeSlice';

import Navigation from '../../components/Navigation/Navigation';
import { Recommendation, SearchedVideoList, VideoList } from './components';
import './Styles.css'
import { SettingsNav } from '../Settings/components';

const Main: React.FC = () => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams();
    let {searchQuery} = useAppSelector(store => store.youtube)
    let {view} = useAppSelector(store => store.view)
    dispatch(setSearchQuery(searchParams.get("search_query")))
    // console.log(searchQuery)

    return(
        <main>
            {
                view === "Main" || "Search"
                ? <Navigation />
                : <SettingsNav />
            }
            <div className='videosContainer'>
                <Outlet />
                {
                    view === "Search"
                    ? <SearchedVideoList/>
                    : <>
                    <Recommendation />
                    <VideoList/>
                    </>
                }
                
            </div>
        </main>
    )
}

export default Main;