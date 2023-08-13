import VideoList from "./VideoList";

const Library = () => {
    return(<div className="library">
        <div className="header">
            <i className="fa-sharp fa-solid fa-clock-rotate-left"/>
            <h1 className="title">History</h1>
        </div>
        <VideoList />
        <div className="header">
            <i className="fa-sharp fa-solid fa-clock-rotate-left"/>     
            <h1 className="title">Watch Later</h1>
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