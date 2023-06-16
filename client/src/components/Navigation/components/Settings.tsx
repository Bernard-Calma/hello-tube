const Settings = () => {
    return(
        <div className="navSettings">
            <div className="navIcons">
            <i className="fa-solid fa-gear"/><span>Settings</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-font-awesome"/><span>Report History</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-circle-question"/><span>Help</span>
            </div>
            <div className="navIcons">
                <i className="fa-solid fa-message"/><span>Send Feedback</span>
            </div>
        </div>
    )
}

export default Settings;