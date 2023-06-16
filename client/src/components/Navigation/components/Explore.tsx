import { Icon } from "../../Common";

const solidIcons: 
    {
        id: number,
        containerClass: string,
        icon: string,
        text: string
    }[] = [       
        {
            id: 0,
            containerClass: "navIcons",
            icon: "fire",
            text: "Trending"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "bag-shopping",
            text: "Shopping"
        },
        {
            id: 2,
            containerClass: "navIcons",
            icon: "music",
            text: "Music"
        },
        {
            id: 3,
            containerClass: "navIcons",
            icon: "tv",
            text: "Movies & TV"
        },
        {
            id: 4,
            containerClass: "navIcons",
            icon: "tower-broadcast",
            text: "Live"
        },
        {
            id: 5,
            containerClass: "navIcons",
            icon: "gamepad",
            text: "Gaming"
        },
        {
            id: 6,
            containerClass: "navIcons",
            icon: "newspaper",
            text: "News"
        },
        {
            id: 7,
            containerClass: "navIcons",
            icon: "trophy",
            text: "Sports"
        },
        {
            id: 8,
            containerClass: "navIcons",
            icon: "lightbulb",
            text: "Learning"
        },
        {
            id: 9,
            containerClass: "navIcons",
            icon: "shirt",
            text: "Fashion & Beauty"
        },
        {
            id: 10,
            containerClass: "navIcons",
            icon: "podcast",
            text: "Podcast"
        },
    ]

const Explore = () => {
    return(
        <div className="navExplore">
            {
                solidIcons.map(icon =>  
                    <Icon 
                        key = {icon.id}
                        containerClass={icon.containerClass}
                        icon = {icon.icon}
                        style = "solid"
                        text = {icon.text}
                    />
                )
            }
        </div>
    )
}

export default Explore;