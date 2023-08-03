import { Outlet, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSearchQuery } from '../../features/youtube/youtubeSlice';

import Navigation from '../../components/Navigation/Navigation';
import { Recommendation, SearchedVideoList, VideoList } from './components';
import './Styles.css'

const Main: React.FC = () => {
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams();
    let {searchQuery} = useAppSelector(store => store.youtube)
    dispatch(setSearchQuery(searchParams.get("search_query")))
    // console.log(searchQuery)

    return(
        <main>
            <Navigation />
            <div className='videosContainer'>
                <Outlet />
                {/* {
                    searchQuery
                    ? <SearchedVideoList 
                    searchQuery = {searchQuery}
                    />
                    : <>
                    <Recommendation />
                    <VideoList/>
                    </>
                } */}
                
            </div>
        </main>
    )
}

export default Main;