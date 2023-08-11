import VideoList from "./VideoList";

const Library = () => {
    return(<div>
        <div className="header">
            <h1 className="title">History</h1>
            <p>Videos Here</p>
        </div>
        <VideoList />
        <div className="header">
            <h1 className="title">Watch Later</h1>
            <p>Videos Here</p>
        </div>
        <VideoList />
        <div className="header">
            <h1 className="title">Playlists</h1>
            <p>Videos Here</p>
        </div>
        <VideoList />
        <div className="header">
            <h1 className="title">Liked Videos</h1>
            <p>Videos Here</p>
        </div>
        <VideoList />
    </div>)
}

export default Library;