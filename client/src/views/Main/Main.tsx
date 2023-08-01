import { useSearchParams } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import { Recommendation, SearchedVideoList, VideoList } from './components';
import './Styles.css'

const Main: React.FC = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search_query");
    console.log(searchQuery)

    return(
        <main>
            <Navigation />
            <div className='videosContainer'>
                {
                    searchQuery
                    ? <SearchedVideoList 
                    searchQuery = {searchQuery}
                    />
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