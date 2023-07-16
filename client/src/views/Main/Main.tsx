import Navigation from '../../components/Navigation/Navigation';
import { Recommendation, VideoList } from './components';
import {videoList} from '../../assets/data/videoList';
import './Styles.css'

const Main: React.FC = () => {
    return(
        <main>
            <Navigation />
            <div className='videosContainer'>
                <Recommendation />
                <VideoList/>
            </div>
        </main>
    )
}

export default Main;