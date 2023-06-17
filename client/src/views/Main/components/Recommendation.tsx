import { Video } from "../../../components/Common";

const Recommendation = () => {

    const videoList = [{
        id: 1,
        title: "Video 1",
        description: "Video Test",
        image: "Video Image"
    }]
    return (
        <div className="recommendationContainer">
            { videoList.map(video => 
                    <Video videoData = {video} />
                )
            }
            <div>
                <h1>Video</h1>
            </div>
            <div>
                <h1>Video</h1>
            </div>
            <div>
                <h1>Video</h1>
            </div>
            <div>
                <h1>Video</h1>
            </div>
        </div>
    )
}

export default Recommendation;