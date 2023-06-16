import Navigation from '../../components/Navigation/Navigation';
import { Recommendation } from './components';

import './Styles.css'
const Main = () => <main>
    <Navigation />
    <div className='videosContainer'>
        <Recommendation />
    </div>
</main>

export default Main;