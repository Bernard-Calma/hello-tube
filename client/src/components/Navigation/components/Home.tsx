import { Icon } from "../../Common";

const Home = () => {

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
            icon: "house",
            text: "Home"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "photo-film",
            text: "Subscription"
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
                        style = "solid"
                        text = {icon.text}
                    />
                )
            }
        </div>
    )
}

export default Home;