import { Link } from "react-router-dom";

interface IconProps {
    containerClass: string;
    icon: string;
    text: string;
    category?: string | null;
}

const Icon = ({containerClass, icon, text, category}: IconProps) => {
    return(
        <Link className={containerClass} 
        to={text=== "Home" ? "/" : `${category}/${text === "Liked Videos" ? "playlist" : text}`}>
            <i className={`fa-solid fa-${icon}`}/><span>{text}</span>
        </Link>
    )
}

export default Icon;