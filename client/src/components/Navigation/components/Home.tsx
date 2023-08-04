import { Icon } from "../../Common";

const Home = () => {

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
            icon: "house",
            text: "Home"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "photo-film",
            text: "Subscription",
            category: "feed"
        },
    ]
    return(
        <div className="navHome">
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

export default Home;