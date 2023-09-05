import TimeAgo from "javascript-time-ago";
import en from 'javascript-time-ago/locale/en'

import ProfileIcon from "./ProfileIcon";
import "./Styles.css"
import { Youtube } from "../../features/youtube/types";
import { Link } from "react-router-dom";
import { videoNotWorking } from "../../assets/images";
import { useAppDispatch } from "../../hooks";
import { setShowVideo } from "../../features/youtube/youtubeSlice";

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

const VideoThumbnail = (props: any) => {
    const dispatch = useAppDispatch();
    // console.log(props)
    const videoProps: Youtube = props.videoData
    const {
        etag,
        snippet
    } = videoProps;
    const {
        title,
        channelTitle,
        publishTime,
        thumbnails,
        description
    } = snippet

    const {url} = thumbnails.high
    // console.log(videoProps)

    const handleImageError = (e: any) => {
       e.target.src = videoNotWorking;
    }

    const handleSetShowVideo = () => {
        dispatch(setShowVideo(videoProps))
    }

    return(
        <Link to={`/watch/${etag}`} onClick={handleSetShowVideo}>
             <div className="videoContainer">
                <img 
                    src={`${url}`} 
                    alt={title + " image"}
                    onError={handleImageError}
                />
                <div className="videoDetails">
                     <div>
                         <ProfileIcon />
                     </div>
                     <div className="videoMeta">
                        <h2 className="videoTitle">{title}</h2>
                         <p className="videoUploadedBy">{channelTitle}</p>
                         {/* <p className="videoViews">{views} views</p> */}
                         <p className="videoUploaded">• {timeAgo.format(new Date(publishTime))}</p>
                         <p className="videoDescription" style={{display: "none"}}>{description}</p>
                     </div>
                 </div>
             </div>
        </Link>
    )
}

export default VideoThumbnail;