import "./Styles.css"
import { Explore, Footer, Home, Settings, Subscription, Videos } from "./components";

const Navigation = () => {
    return(
        <nav>
            <Home />
            <Videos />
            <Subscription />
            <Explore />
            <Settings />
            <Footer />
        </nav>
    )
}

export default Navigation;