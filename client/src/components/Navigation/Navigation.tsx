import "./Styles.css"
import { Explore, Footer, Home, Settings, Videos } from "./components";

const Navigation = () => {
    return(
        <nav>
            <Home />
            <Videos />
            <Explore />
            <Settings />
            <Footer />
        </nav>
    )
}

export default Navigation;