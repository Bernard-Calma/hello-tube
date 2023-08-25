import { VideoThumbnail } from "../../../components/Common";
import { useAppSelector } from "../../../hooks";

const LikedVideos = () => {
    const {
        videos
    } = useAppSelector(store => store.youtube)
    return <div className="likedVideos">
        <div className="videoPreview">
            {
                videos.map((video, index) => index === 0 && 
                    <VideoThumbnail 
                        key = {video.etag}
                        videoData = {video}
                    />
                )
            }
            <h2>Liked Videos</h2>
            <p>Ryznrd</p>
            <p>21 videos No Views Last Updated on 24 Aug 2023</p>
            <i className="fa-solid fa-ellipsis-vertical"/>
            <div>
                <div>
                    <i className="fa-solid fa-play"></i>
                    <p>play all</p>
                </div>
                <div>
                    <i className="fa-solid fa-shuffle"/>
                   <p>shuffle</p> 
                </div>
            </div>
        </div>

    </div>
}

export default LikedVideos;