import { VideoThumbnail } from "../../../components/Common";
import { useAppSelector } from "../../../hooks";
import VideoList from "./VideoList";

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
            <div className="previewDetails">
                <h2>Liked Videos</h2>
                <p className="owner">Ryznrd</p>
                <p>21 videos No Views Last Updated on 24 Aug 2023</p>
                <i className="fa-solid fa-ellipsis-vertical"/>
                <div className="navContainer">
                    <div className="previewNav">
                        <i className="fa-solid fa-play"></i>
                        <p>Play all</p>
                    </div>
                    <div className="previewNav">
                        <i className="fa-solid fa-shuffle"/>
                    <p>Shuffle</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className="likedVideosList">
            <VideoList />
        </div>

    </div>
}

export default LikedVideos;