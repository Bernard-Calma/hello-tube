import {connect, ConnectedProps} from "react-redux"
import {Link} from "react-router-dom"

import ProfileIcon from "./ProfileIcon";
import "./Styles.css"
import { Youtube } from "../../features/youtube/types";

interface RootState {
    video: Youtube;
}

const mapState = (state:RootState) =>({
    video: {}
})
const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
    video: Youtube
}
const videoNotWorking = require("../../assets/images/VideoNotWorking.png")

const VideoThumbnail = (props: any) => {
    // console.log(props)
    const videoProps: Youtube = props
    const {etag} = videoProps;
    // console.log(videoProps)
    // const {
    //     title,
    //     channelId,
    //     publishTime,
    //     thumbnails
    // } = snippet;
    // const {default: url} = thumbnails;

    
    // const handleImageError = (e: any) => {
    //    e.target.src = videoNotWorking;
    // }
    return(
        <p>{etag}</p>
        // <Link to={`/watch/${etag}`}>
        //     <div className="videoContainer">
        //         <img 
        //             src={`${url}`} 
        //             alt={title + " image"}
        //             onError={handleImageError}
        //         />
        //         <div className="videoDetails">
        //             <div>
        //                 <ProfileIcon />
        //             </div>
        //             <div className="videoMeta">
        //                 <h2 className="videoTitle">{title}</h2>
        //                 <p className="videoUploadedBy">{channelId}</p>
        //                 {/* <p className="videoViews">{views} views</p> */}
        //                 <p className="videoUploaded">• {publishTime}</p>
        //             </div>
        //         </div>
        //     </div>
        // </Link>
    )
}

export default VideoThumbnail;