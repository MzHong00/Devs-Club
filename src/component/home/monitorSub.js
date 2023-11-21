import { useState } from "react";
import ClubNews from "./clubNews";
import IntroLogo from "./introLogo";

export default function MonitorSub({ section, handleSection }) {
    const [frameWidth, setFrameWidth] = useState(50);

    const focusFrame = () => {
        setFrameWidth(60);
    }

    const subSectionHandler = () => {

        switch (section) {
            case "1":
                return <ClubNews onClick={handleSection}/>
            case "2":
                break;
            case "3":
                break;
            case "4":
                return 
            default:
                return <IntroLogo></IntroLogo>
        }
    }

    return (
        <div className="introSubFrame" style={{width: `${frameWidth}%`}}>
            {subSectionHandler()}
        </div>
    )
}