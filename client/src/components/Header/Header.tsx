import './Styles.css'
import { Profile, SearchBar, WebsiteLogo } from './components'

const Header = () => 
    <header>
        <WebsiteLogo />
        <SearchBar />
        <Profile />
    </header>

export default Header