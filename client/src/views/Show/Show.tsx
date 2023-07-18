import { Recommendation } from "../Main/components";
import { Video } from "./components";

import "./Styles.css"

const Show: React.FC = () => {
    return(
        <div className="showContainer">
            <Video />
            <Recommendation />
        </div>
    )
}

export default Show;