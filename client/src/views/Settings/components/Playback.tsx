import { ToggleButton } from "../../../components/Common";
import "../Styles.css"

const Playback = () => {
    return(
        <div className="accountPlayback">
            <div className="title">
                <h3>Playback and performance</h3>

                <h2>Control your video viewing experience</h2>
                <p className="light">Playback settings apply to this browser only</p>
            </div>

            <div className="settings">
                <p className="bold title">Info cards</p>
                <div className="subDiv">
                    
                    <input type="checkbox"/>
                    <p>Show in-video info cards </p>
                    <i className="fa-regular fa-circle-question"/>
                </div>
            </div>

            <div className="settings">
                <p className="bold title">Subtitles and Closed Captions</p>
                <div className="subDiv">
                    
                    <input type="checkbox"/>
                    <p>Show in-video info cards </p>
                    <i className="fa-regular fa-circle-question"/>
                </div>
            </div>

            <div className="settings">
                <p className="bold title">AV1 Settings</p>
                <div>
                    <div className="subDiv">
                        <input type="radio" name="av1Settings" />
                        <p>Auto (recommended) </p>
                    </div>
                    <div className="subDiv">
                        <input type="radio" name="av1Settings" defaultChecked/>
                        <p>Prefer AV1 for SD </p>
                        <i className="fa-regular fa-circle-question"/>
                    </div>
                    <div className="subDiv">
                        <input type="radio" name="av1Settings"/>
                        <p>Always prefer AV1</p>
                        <i className="fa-regular fa-circle-question"/>
                    </div>
                </div>
            </div>

            <div className="settings">
                <p className="bold title">Browsing</p>
                <div className="subDiv">
                    <ToggleButton 
                        toggled = {true}
                        label="Inline playback"
                        description="Play videos when you hover over them on the Home and Search pages"
                    />
                </div>
            </div>            
        </div>
        
    )
}

export default Playback;