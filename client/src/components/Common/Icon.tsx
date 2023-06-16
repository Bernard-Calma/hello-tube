interface IconProps {
    containerClass: string;
    icon: string;
    style: string; 
    text: string;
}

const Icon = ({containerClass, style, icon, text}: IconProps) => {
    return(
        <div className={containerClass}>
            <i className={`fa-${style} fa-${icon}`}/><span>{text}</span>
        </div>
    )
}

export default Icon;