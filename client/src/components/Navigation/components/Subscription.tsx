import { Icon } from "../../Common";

const Subscription = () => {
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
            icon: "bookmark",
            text: "React"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "bookmark",
            text: "Javascript"
        },
        {
            id: 2,
            containerClass: "navIcons",
            icon: "bookmark",
            text: "Python"
        },
        {
            id: 3,
            containerClass: "navIcons",
            icon: "bookmark",
            text: "Sass"
        },
    ]
    return(
        <div className="navSubs">
            {
                solidIcons.map(icon =>  
                    <Icon 
                        key = {icon.id}
                        containerClass={icon.containerClass}
                        icon = {icon.icon}
                        text = {icon.text}
                    />
                )
            }
        </div>
    )
}

export default Subscription;