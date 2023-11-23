import ClubNews from "./clubNews";
import IntroLogo from "./introLogo";
import Activity from "./activity";

export default function MonitorSub({ section, width, onSectionChange }) {

    const subSectionHandler = () => {

        switch (section) {
            case "1":
                return <ClubNews onClick={onSectionChange}/>
            case "2":
                break;
            case "3":
                return <Activity />
            case "4":
                return 
            default:
                return <IntroLogo></IntroLogo>
        }
    }

    return (
        <div className="introSubFrame" style={{width: `${width}%`}}>
            {subSectionHandler()}
        </div>
    )
}