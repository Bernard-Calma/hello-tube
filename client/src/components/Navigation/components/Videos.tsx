const Videos = () => {
    return(
        <div className="navVideos">
            <div className="navIcons">
            <i className="fa-solid fa-film"/> <span>Library</span>
            </div>
            <div className="navIcons">
            <i className="fa-solid fa-clock-rotate-left"></i> <span> History</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-file-video"/> <span>Your Videos</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-heart"/> <span> Liked Videos</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-star"/> <span>Favourites</span>
            </div>
        </div>
    )
}

export default Videos;