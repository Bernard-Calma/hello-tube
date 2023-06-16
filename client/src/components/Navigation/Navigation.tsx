import "./Styles.css"
import { Home, Settings, Videos } from "./components";

const Navigation = () => {
    return(
        <nav>
            <Home />
            <Videos />
            <Settings />
        </nav>
    )
}

export default Navigation;