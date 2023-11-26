import IntroLogo from "./introLogo";
import ClubSingup from "./clubSignup";

export default function MonitorMain({ section, width }) {

    const mainSectionHandler = () => {
        switch (section) {
            case "홈":
                return <IntroLogo></IntroLogo>
            case "소개":
                break;
            case "활동":
                return
            case "구성원":
                return 
            default:
                return <ClubSingup></ClubSingup>
        }
    }

    return (
        <div className="introMainFrame" style={{width: `${width}%`}}>
            {mainSectionHandler()}
        </div>
    )
}