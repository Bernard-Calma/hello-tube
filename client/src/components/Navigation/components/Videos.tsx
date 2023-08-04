import { Icon } from "../../Common";

const Videos = () => {
    const solidIcons: 
    {
        id: number,
        containerClass: string,
        icon: string,
        text: string,
        category?: string
    }[] = [       
        {
            id: 0,
            containerClass: "navIcons",
            icon: "film",
            text: "Library",
            category: "feed"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "clock-rotate-left",
            text: "History",
            category: "feed"
        },
        {
            id: 2,
            containerClass: "navIcons",
            icon: "file-video",
            text: "Your Videos"
        },
        {
            id: 3,
            containerClass: "navIcons",
            icon: "heart",
            text: "Liked Videos"
        },
        {
            id: 4,
            containerClass: "navIcons",
            icon: "star",
            text: "Favourites"
        }
    ]
    
    return(
        <div className="navVideos">
            {
                solidIcons.map(icon =>  
                    <Icon 
                        key = {icon.id}
                        containerClass={icon.containerClass}
                        icon = {icon.icon}
                        text = {icon.text}
                        category = {icon.category}
                    />
                )
            }
        </div>
    )
}

export default Videos;