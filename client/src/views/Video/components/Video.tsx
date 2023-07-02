import {useParams} from "react-router-dom"
import { videoList } from "../../../assets/data/videoList";
import { ProfileIcon } from "../../../components/Common";
const videoNotWorking = require("../../../assets/images/VideoNotWorking.png")

const Video:React.FC = () => {
    const {videoId}: any = useParams();
    const {id, title, uploadedBy, image, views, uploaded} = videoList[videoId - 1]
    
    const handleImageError = (e: any) => {
        e.target.src = videoNotWorking;
     }
    return (
        <div>
            <img 
                src={image} 
                alt={title + " image"}
                onError={handleImageError}
            />
            <div className="videoDetails">
                <div>
                    <ProfileIcon />
                </div>
                <div className="videoMeta">
                    <h2 className="videoTitle">{title}</h2>
                    <p className="videoUploadedBy">{uploadedBy}</p>
                    <p className="videoViews">{views} views</p>
                    <p className="videoUploaded">• {uploaded}</p>
                </div>
            </div>
        </div>
    )
}

export default Video;