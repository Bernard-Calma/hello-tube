import { ProfileIcon } from "../../../components/Common";
import { useAppSelector } from "../../../hooks";
import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

const videoNotWorking = require("../../../assets/images/VideoNotWorking.png")

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const Video:React.FC = () => {
    const {
        showVideo
    } = useAppSelector(store => store.youtube)
    if (showVideo?.snippet) {
        const {
            snippet,
            id
        } = showVideo;
        const {
            title,
            channelTitle,
            description,
            publishTime,
            thumbnails
        } = snippet
        const url = id.videoId

        const handleImageError = (e: any) => {
            e.target.src = videoNotWorking;
        }

        return (
            <div className="showVideoContainer">
                <iframe 
                    width="auto" 
                    height="auto" 
                    src = {`https://www.youtube.com/embed/${url}`}
                    title = "YouTube video player" 
                    allowFullScreen={true}>
                </iframe>
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
                        <p className="videoUploaded">{timeAgo.format(new Date(publishTime))}</p>
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