import "./Styles.css"
import { Explore, Home, Settings, Videos } from "./components";

const Navigation = () => {
    return(
        <nav>
            <Home />
            <Videos />
            <Explore />
            <Settings />
        </nav>
    )
}

export default Navigation;