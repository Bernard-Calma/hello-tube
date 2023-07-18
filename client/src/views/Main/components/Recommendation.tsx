import { VideoThumbnail } from "../../../components/Common";
import { useAppSelector } from "../../../hooks";

const Recommendation = () => {
    const {
        videos
    } = useAppSelector(store => store.youtube)
    return (
        <div className="recommendationContainer">
            { videos.map((video, index) => 
                    index > videos.length - 9 && <VideoThumbnail 
                        key = {video.etag}
                        videoData = {video} 
                    />
                )
            }
        </div>
    )
}

export default Recommendation;