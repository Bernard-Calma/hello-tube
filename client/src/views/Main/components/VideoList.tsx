import { useAppSelector } from "../../../hooks";

import { VideoThumbnail } from "../../../components/Common";
import { Youtube } from "../../../features/youtube/types";

const VideoList = () => {
    const {
        videos
    } = useAppSelector(store => store.youtube)

    return(
        <div className="videoListContainer">
            { videos.map(video => 
                     <VideoThumbnail
                        videoData = {video}
                    />
                )
            }
        </div>
    )
}

export default VideoList;