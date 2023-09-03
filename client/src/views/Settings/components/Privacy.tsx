import { ToggleButton } from "../../../components/Common";

const Privacy = () => {
    return (
        <div className="accountPrivacy">
            <div>
                <h3>Privacy</h3>
                <h1>Manage what you share on HelloTube</h1>
                <p>Choose who can see your saved playlists and subscritpions</p>
                <p>Review <span className="blue">HelloTube Terms of Service</span> and <span className="blue">Google Privacy Policy</span></p>
            </div>

            <div className="general">
                <div className="subDiv">
                    <p className="bold title"> Subscriptions </p>
                    <ToggleButton 
                        toggled = {true}
                        label="Keep all my subscriptions private"
                        description="Your subscriptions won't be visible to others, unless you use features that make them public. Learn more about what could make your subscriptions visible or manage your subscriptions here."
                    />
                </div>

                <div className="subDiv">
                    <p className="bold title">Ads on HelloTube</p>
                    <div>
                        <p>You may see ads on YouTube based on general factors, like the topic of a video. The ads that you see may also depend on your choices on
                            <span>May Ad Centre</span>. To learn more about how ads work for family accounts with children, visit the 
                            <span>Google for Families Help Centre</span>
                        </p>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Privacy;