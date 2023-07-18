import {useParams} from "react-router-dom"
import { ProfileIcon } from "../../../components/Common";
import { useAppSelector } from "../../../hooks";
const videoNotWorking = require("../../../assets/images/VideoNotWorking.png")

const Video:React.FC = () => {
    const {videoId}: any = useParams();
    const {
        showVideo
    } = useAppSelector(store => store.youtube)
    if (showVideo?.snippet) {
        const {
            snippet
        } = showVideo;
        const {
            title,
            channelTitle,
            description,
            publishTime,
            thumbnails
        } = snippet
    
        const {url} = thumbnails.high

        const handleImageError = (e: any) => {
            e.target.src = videoNotWorking;
        }

        return (
            <div className="showVideoContainer">
                <img 
                    src={url} 
                    alt={title + " image"}
                    onError={handleImageError}
                />
                <div className="videoDetails">
                    <h2 className="videoTitle">{title}</h2>
                    <div className="videoEngagement">
                        <ProfileIcon />
                        <p className="videoUploadedBy">{channelTitle}</p>
                        <p className="subscribeButton">Subscribe</p>
                        <div className="engagementContainer">
                            <div className="likeContainer">
                                <i className="fa-solid fa-thumbs-up"/>
                                <span className="likes">100</span>
                                <i className="fa-solid fa-thumbs-down fa-flip-horizontal"/>
                            </div>
                            <div className="shareContainer">
                                <i className="fa-solid fa-share"/>
                                <span>Share</span>
                            </div>
    
                            <div className="downloadContainer">
                                <i className="fa-solid fa-download"/>
                                <span>Download</span>
                            </div>
    
                            <div className="saveContainer">
                                <i className="fa-solid fa-bars-staggered"/>
                                <span>Save</span>
                            </div>
    
                            <div className="options">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        
                        </div>
    
                    </div>
                    <div className="videoMeta">
                        {/* <p className="videoViews">{views} views</p> */}
                        <p className="videoUploaded">{publishTime}</p>
                        <p className="videoDescription">{description}</p>
                    </div>
                    
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Video;