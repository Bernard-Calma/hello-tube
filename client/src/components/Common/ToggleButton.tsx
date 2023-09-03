import { useState } from "react"
import "./Styles.css"

interface toggleButtonProps {
    label: string;
    toggled: boolean;
    description: string;
}

const ToggleButton = ({label, toggled, description}: toggleButtonProps) => {
    const [toggle, setToggle] = useState(toggled)

    return(
        <div className="toggleContainer">
            <label>
                <input 
                    type="checkbox" 
                    defaultChecked={toggled} 
                    onClick={()=>setToggle(!toggle)}  
                />
            <span />
        </label>
            <div>
                <p className="label bold">{label}</p>
                <p className="description">{description}</p>
            </div>
        </div>

    )
}

export default ToggleButton;