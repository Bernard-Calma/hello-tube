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
                to={"/account"}>Account
            </Link>
            <Link 
                className={`${location.pathname === "/account_notifications" ? "selected" : ''}`}
                to={"/account_notifications"}>Notifications
            </Link>
            <Link 
                className={`${location.pathname === "/account_playback" ? "selected" : ''}`}
                to={"/account_playback"}>Playback and performance
            </Link>
            <Link 
                className={`${location.pathname === "/account_privacy" ? "selected" : ''}`}
                to={"/account_privacy"}>Privacy
            </Link>
            <Link 
                className={`${location.pathname === "/account_billing" ? "selected" : ''}`}
                to={"/account_billing"}>Billing and payments
            </Link>
            <Link to={"/account_advance"}>Advance settings</Link>
        </nav>
    )
}

export default SettingsNav;