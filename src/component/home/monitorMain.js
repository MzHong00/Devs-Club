import IntroLogo from "./introLogo";
import ClubSingup from "./clubSignup";

export default function MonitorMain({ section }) {

    const mainSectionHandler = () => {
        switch (section) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                return <ClubSingup></ClubSingup>
            default:
                return <IntroLogo></IntroLogo>
        }
    }

    return (
        <div className="introMainFrame">
            {mainSectionHandler()}
        </div>
    )
}