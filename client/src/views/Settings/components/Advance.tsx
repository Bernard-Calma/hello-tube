const Advance = () => {
    return(
        <div className="accountAdvance">
            <h3>Advanced settings</h3>
            <h2>Set up HelloTube exactly how you want it</h2>

            <div className="general">
                <div className="subDiv">
                    <p className="bold title">User ID</p>
                    
                    <div className="copy">
                        <input 
                            className="copyID"
                            type="text" 
                            value={"1houwunllIUV7SBs27Zc6w"} />
                        <button>Copy</button>
                    </div>
                </div>
                <div className="subDiv">
                    <p className="bold title">Channel ID</p>
                    <div className="copy">
                        <input 
                            className="copyID"
                            type="text" 
                            value={"UC1houwunllIUV7SBs27Zc6w"} />
                        <button>Copy</button>
                    </div>
                </div>
                <div className="subDiv">
                    <p className="bold title">Move channel</p>
                    <div>
                        <p className="blue bold">Move channel to a brand account</p>
                        <p>You can move your channel to a brand account</p>
                    </div>
                </div>
                <div className="subDiv">
                    <p className="bold title">Delete channel</p>
                    <div>
                        <p className="blue bold">Delete channel</p>
                        <p>Deleting your YouTube channel won't close your Email Account</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advance;