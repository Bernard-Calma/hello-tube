import { Link } from "react-router-dom";

const SettingsNav = () => <div className="settingsMenu">
    <h2>Settings</h2>
    <Link to={"/account"}>Account</Link>
    <Link to={"/account_notifications"}>Notification</Link>
    <Link to={"/account_playback"}>Playback and performance</Link>
    <Link to={"/account_privacy"}>Privacy</Link>
    <Link to={"/account_sharing"}>Connected apps</Link>
    <Link to={"/account_billing"}>BilLinkng and payments</Link>
    <Link to={"/account_advance"}>Advance settings</Link>
</div>

export default SettingsNav;