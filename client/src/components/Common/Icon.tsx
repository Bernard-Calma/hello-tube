import { Link } from "react-router-dom";

interface IconProps {
    containerClass: string;
    icon: string;
    text: string;
    category?: string | null;
}

const Icon = ({containerClass, icon, text, category}: IconProps) => {
    // console.log(category)
    return(
        <Link className={containerClass} 
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
                : text}`
        }>
            <i className={`fa-solid fa-${icon}`}/><span>{text}</span>
        </Link>
    )
}

export default Icon;