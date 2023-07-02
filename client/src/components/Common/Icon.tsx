interface IconProps {
    containerClass: string;
    icon: string;
    text: string;
}

const Icon = ({containerClass, icon, text}: IconProps) => {
    return(
        <div className={containerClass}>
            <i className={`fa-solid fa-${icon}`}/><span>{text}</span>
        </div>
    )
}

export default Icon;