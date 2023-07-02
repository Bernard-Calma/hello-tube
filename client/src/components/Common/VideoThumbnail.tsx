import {Link} from "react-router-dom"

import ProfileIcon from "./ProfileIcon";
import "./Styles.css"

const videoNotWorking = require("../../assets/images/VideoNotWorking.png")

interface iVideoDetails {
    videoData: {
        id: number;
        title: string;
        uploadedBy: string;
        description: string;
        image: string;
        views: number;
        uploaded: string;
    }
}

const VideoThumbnail = (props: iVideoDetails) => {
    const {id, title, uploadedBy, image, views, uploaded} = props.videoData;
    
    const handleImageError = (e: any) => {
       e.target.src = videoNotWorking;
    }
    return(
        <Link to={`/watch/${id}`}>
            <div className="videoContainer">
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
        </Link>
    )
}

export default VideoThumbnail;