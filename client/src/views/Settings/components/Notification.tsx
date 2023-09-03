import { ToggleButton } from "../../../components/Common";
import "../Styles.css"

const Notification = () => {
    return (
        <div className="accountNotifications">
            <h3>Notifications</h3>
            <h2>Choose when and how to be notified</h2>
            <p>Select push and email notifications that you'd like to receive</p>
        
            <div className="general">
                <h3>General</h3>
                <p>Manage your mobile and desktop notification</p>

                <div>
                    <p className="bold title">Desktop Notification</p>
                    <div className="subDiv">
                        <ToggleButton 
                            toggled = {true}
                            label="Get notifications in this browser"
                            description="Receive notifications on your computer, even you're not watching HelloTube"
                        />
                    </div>
                </div>

                <div>
                    <p className="bold title">Your preferences</p>
                    <div className="subDiv">
                        <p className="bold">Subscriptions</p>
                        <p>Notify me about activity from the <span className="blue"> channels that I'm subscribed to</span></p>
                        <p className="bold">Recommended Videos</p>
                        <p>Notify me of videos that I might like based on what I watch</p>
                        <p className="bold">Activity on my channel</p>
                        <p>Notify me about comments and other activity on my channel and videos</p>
                        <p className="bold">Replies to my comments</p>
                        <p>Notify me about replies to my commnets</p>
                        <p className="bold">Mentions</p>
                        <p>Notify me when others mention my channel</p>
                        <p className="bold">Shared content</p>
                        <p>Notify me when others share my content on their channels</p>
                        <p className="bold">Promotional content and offerings</p>
                        <p>Notify me of promotional content and offerings, like member-only perks</p>
                    </div>
                </div>
            </div>
            <div className="emailNotification">
                
                <h3 className="bold">Email Notifications</h3>
                <p>Your emails are sent to bernard_calma@email.com. To unsubscribe from an email, click the 'Unsubsribe' link at the bottom of it. <span  className="blue">Learn more</span> about emails from HelloTube</p>

                <div className="emailNotifToggle">
                    <p className="bold title">Your Family</p>
                    <div className="subDiv">
                        <ToggleButton 
                            label = {"Send me emails about family and product udpates for HelloTube"}
                            toggled = {false}
                            description={"By turning on this settings, you're opting in to emails with recommended content, tips and product updated for families"}
                        />
                    </div>
                    
                </div>
                
                <div className="emailNotifToggle">
                    <p className="bold title">Permission</p>
                    <div className="subDiv">
                        <ToggleButton 
                            label = {"Send me emails about my HelloTube activity and updates that I required"}
                            toggled = {false}
                            description= "If this settings is turned off, HelloTube may still send you messages regarding your account, required service announcements, legal notifications and privacy matters"
                        />
                    </div>
                </div>

                <div>
                    <p className="bold title">Your preferences</p>
                    <div className="subDiv">
                        <ToggleButton 
                            label = "General product updates"
                            toggled = {true}
                            description= "Announcements and recommendations"
                        />
                        <ToggleButton 
                            label="YouTube Premium updates"
                            toggled = {true}
                            description="Announcements, updates and recommendations from YouTube Premium and YouTube Music Premium"
                        />
                        <ToggleButton 
                            toggled = {true}
                            label="Creator updates and announcements"
                            description="Product announcements, creator events and personalised tips to grow your YouTube channel"
                        />
                    </div>
                </div>

                <div>
                    <p className="bold title">Lanugage</p>
                    <div className="subDiv">
                        <p>Email Language</p>
                        <p>English (UK)</p>
                        <p>This settings applies to emails only</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Notification;