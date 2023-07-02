import {Link} from "react-router-dom"

const WebsiteLogo = () => 
    <div className="websiteLogo">
        <i className="fa-solid fa-bars"></i>
        <Link to="/"><h1>HelloTube</h1></Link>
    </div>
    

export default WebsiteLogo;