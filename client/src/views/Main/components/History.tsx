import VideoList from "./VideoList";

const History = () => {
    return(
        <>
            <div className="history">
                <div>
                    <div className="header">
                        <h1 className="title">Watch History</h1>
                        <h2>Today</h2>
                    </div>
                    <VideoList />
                </div>

                <div className="historySettings">
                    <div className="searchDiv"> 
                        <i className="fa-sharp fa-solid fa-magnifying-glass"/>
                        <p>Search watch history</p>
                    </div>
                    <h2>History Type</h2>
                    <div className="historyType">
                        <div>
                            <p>Watch history</p>
                            <input type="radio" name="historyType" id="historyType" defaultChecked/>
                        </div>
                        <div>
                            <p>Community</p>
                            <input type="radio" name="historyType" id="community" />
                        </div>
                        
                    </div>
                    <div className="manageHistory">
                        <div>
                            <i className="fa-regular fa-trash-can"/>
                            <p>Clear all watch history</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-pause"/>
                            <p>Pause watch history</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-gear"/>
                            <p>Manage all history</p>
                        </div>
                    </div>
                    <div className="historyFooter">
                        <p>Watch and search histroy</p>
                        <p>Comments</p>
                        <p>Live Chat</p>
                    </div>
                </div>
            </div>
        </>

)}

export default History;