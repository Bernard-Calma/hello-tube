import { Video } from "../../../components/Common";
import { videoListType } from "../../../assets/data/videoList";


const VideoList = ({videoList}: videoListType) => {
    return(
        <div className="videoListContainer">
            { videoList.map(video => 
                    <Video 
                        key = {video.id}
                        videoData = {video} 
                    />
                )
            }
        </div>
    )
}

export default VideoList;