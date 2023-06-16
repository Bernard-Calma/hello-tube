import "./Styles.css"
import { Home, Videos } from "./components";

const Navigation = () => {
    return(
        <nav>
            <Home />
            <Videos />
        </nav>
    )
}

export default Navigation;