import { Icon } from "../../Common";

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
            icon: "fire",
            text: "Trending",
            category: "feed"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "bag-shopping",
            text: "Shopping",
            category: "channel"
        },
        {
            id: 2,
            containerClass: "navIcons",
            icon: "music",
            text: "Music",
            category: "channel"
        },
        {
            id: 3,
            containerClass: "navIcons",
            icon: "tv",
            text: "Movies & TV",
            category: "feed"
        },
        {
            id: 4,
            containerClass: "navIcons",
            icon: "tower-broadcast",
            text: "Live",
            category: "channel"
        },
        {
            id: 5,
            containerClass: "navIcons",
            icon: "gamepad",
            text: "Gaming",
        },
        {
            id: 6,
            containerClass: "navIcons",
            icon: "newspaper",
            text: "News",
            category: "channel"
        },
        {
            id: 7,
            containerClass: "navIcons",
            icon: "trophy",
            text: "Sports",
            category: "channel"
        },
        {
            id: 8,
            containerClass: "navIcons",
            icon: "lightbulb",
            text: "Learning",
            category: "channel"
        },
        {
            id: 9,
            containerClass: "navIcons",
            icon: "shirt",
            text: "Fashion & Beauty",
            category: "channel"
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
            <p className="navTitle">Explore</p>
            {
                solidIcons.map(icon =>  
                    <Icon 
                        key = {icon.id}
                        containerClass={icon.containerClass}
                        icon = {icon.icon}
                        text = {icon.text}
                        category={icon.category}
                    />
                )
            }
        </div>
    )
}

export default Explore;