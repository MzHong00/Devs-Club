import IntroLogo from "./introLogo";
import ClubSingup from "./clubSignup";

export default function MonitorMain({ section }) {

    const mainSectionHandler = () => {
        switch (section) {
            case "1":
                return <IntroLogo></IntroLogo>
            case "2":
                break;
            case "3":
                break;
            case "4":
                return 
            default:
                return <ClubSingup></ClubSingup>
        }
    }

    return (
        <div className="introMainFrame">
            {mainSectionHandler()}
        </div>
    )
}