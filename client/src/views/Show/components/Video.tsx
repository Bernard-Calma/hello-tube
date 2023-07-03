import {useParams} from "react-router-dom"
import { videoList } from "../../../assets/data/videoList";
import { ProfileIcon } from "../../../components/Common";
const videoNotWorking = require("../../../assets/images/VideoNotWorking.png")

const Video:React.FC = () => {
    const {videoId}: any = useParams();
    const {title, uploadedBy, image, views, uploaded, description} = videoList[videoId - 1]
    
    const handleImageError = (e: any) => {
        e.target.src = videoNotWorking;
     }
    return (
        <div className="showVideoContainer">
            <img 
                src={image} 
                alt={title + " image"}
                onError={handleImageError}
            />
            <div className="videoDetails">
                <h2 className="videoTitle">{title}</h2>
                <div className="videoEngagement">
                    <ProfileIcon />
                    <p className="videoUploadedBy">{uploadedBy}</p>
                    <p className="subscribeButton">Subscribe</p>
                    <div className="engagementContainer">
                        <div className="likeContainer">
                            <i className="fa-solid fa-thumbs-up"><span>100</span></i>
                            <i className="fa-solid fa-thumbs-down fa-flip-horizontal"/>
                        </div>
                        <div className="shareContainer">
                            <i className="fa-solid fa-share"/>
                            <span>Share</span>
                        </div>
                        
                        <div className="options">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    
                    </div>

                </div>
                <div className="videoMeta">
                    <p className="videoViews">{views} views</p>
                    <p className="videoUploaded">{uploaded}</p>
                    <p className="videoDescription">{description}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Video;