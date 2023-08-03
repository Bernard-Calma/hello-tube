import { Link } from "react-router-dom";

interface IconProps {
    containerClass: string;
    icon: string;
    text: string;
}

const Icon = ({containerClass, icon, text}: IconProps) => {
    return(
        <Link className={containerClass} 
        to={text=== "Home" ? "/" : `feed/${text}`}>
            <i className={`fa-solid fa-${icon}`}/><span>{text}</span>
        </Link>
    )
}

export default Icon;