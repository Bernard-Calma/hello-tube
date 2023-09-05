import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { useDispatch } from "react-redux";
import { changeViewMain, changeViewSettings } from "../../features/views/viewSlice";

interface IconProps {
    containerClass: string;
    icon: string;
    text: string;
    category?: string | null;
    view: string;
}

const Icon = ({containerClass, icon, text, category, view}: IconProps) => {
    // console.log(category)
    const dispatch = useAppDispatch(); 
    return(
        <Link 
            onClick={() => view === "main" ? dispatch(changeViewMain()) : dispatch(changeViewSettings())}
            className={containerClass} 
            to={text=== "Home" 
                ? "/" 
                : `${category ? category : ""}/${
                text === "Liked Videos"
                    ? "playlist" 
                :text === "Favourites"
                    ? "playlist" 
                :text === "Movies & TV" 
                    ? "storefront"
                :text === "Fashion & Beauty" 
                    ? "fashion"
                :text === "Settings" 
                    ? "account"
                :text === "Report History" 
                    ? "reporthistory"
                    : text}`
                    
        }>
            <i className={`fa-solid fa-${icon}`}/><span>{text}</span>
        </Link>
    )
}

export default Icon;