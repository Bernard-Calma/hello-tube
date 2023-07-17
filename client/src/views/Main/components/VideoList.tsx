import { useAppSelector } from "../../../hooks";
import { VideoThumbnail } from "../../../components/Common";

const VideoList = () => {
    const {
        videos
    } = useAppSelector(store => store.youtube)

    return(
        <div className="videoListContainer">
            { videos.map(video => 
                     <VideoThumbnail
                        key = {video.etag}
                        videoData = {video}
                    />
                )
            }
        </div>
    )
}

export default VideoList;