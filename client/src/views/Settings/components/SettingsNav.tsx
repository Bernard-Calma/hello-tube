import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";

const SettingsNav = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    // console.log(location.pathname)
    return (
        <nav className="settingsMenu">
            <h2>Settings</h2>
            <Link
                className={`${location.pathname === "/account" ? "selected" : ''}`}
                to={"/account"}>Account</Link>
            <Link to={"/account_notifications"}>Notification</Link>
            <Link to={"/account_playback"}>Playback and performance</Link>
            <Link to={"/account_privacy"}>Privacy</Link>
            <Link to={"/account_sharing"}>Connected apps</Link>
            <Link to={"/account_billing"}>BilLinkng and payments</Link>
            <Link to={"/account_advance"}>Advance settings</Link>
        </nav>
    )
}

export default SettingsNav;