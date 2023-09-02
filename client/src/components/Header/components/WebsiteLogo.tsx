import {Link} from "react-router-dom"
import { useAppDispatch } from "../../../hooks";
import { changeViewMain } from "../../../features/views/viewSlice";

const WebsiteLogo = () => {
    const dispatch = useAppDispatch()
    return (
        <div className="websiteLogo">
            <i className="fa-solid fa-bars"></i>
            <Link 
                onClick={() => dispatch(changeViewMain())}
                to="/"><h1>HelloTube</h1>
            </Link>
        </div>
    )
}
    
    

export default WebsiteLogo;