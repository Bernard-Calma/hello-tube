import { Outlet } from "react-router-dom";
import "./Styles.css"
import { SettingsNav } from "./components";

const Settings = () => <div className="settingsSection">
    <SettingsNav />
    <div className="settingsContainer">
        State
    </div>
</div>

export default Settings;