import { Recommendation } from "../Main/components";
import { Video } from "./components";

import "./Styles.css"

const Show: React.FC = () => {
    return(
        <div className="showContainer">
            <Video />
            <div className="showRecommendationDiv">
                <Recommendation />
            </div>
        </div>
    )
}

export default Show;