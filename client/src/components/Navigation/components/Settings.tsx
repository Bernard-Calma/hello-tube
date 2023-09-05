import { Icon } from "../../Common";

const Settings = () => {
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
            icon: "gear",
            text: "Settings"
        },
        {
            id: 1,
            containerClass: "navIcons",
            icon: "font-awesome",
            text: "Report History"
        },
        // {
        //     id: 2,
        //     containerClass: "navIcons",
        //     icon: "circle-question",
        //     text: "Help"
        // },
        // {
        //     id: 3,
        //     containerClass: "navIcons",
        //     icon: "message",
        //     text: "Send Feedback"
        // },
    ]
    
    return(
        <div className="navHome">
            {
                solidIcons.map(icon =>  
                    <Icon 
                        view = {`${
                            icon.text === "Report History"
                            ? "main"
                            : "settings"
                        }`}
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

export default Settings;