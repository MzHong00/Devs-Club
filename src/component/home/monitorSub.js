import ClubNews from "./clubNews";
import IntroLogo from "./introLogo";
import Activity from "./activity";

export default function MonitorSub({ section, width, handleSection }) {

    const subSectionHandler = () => {

        switch (section) {
            case "홈":
                return <ClubNews onClick={handleSection} />
            case "소개":
                return;
            case "활동":
                return (
                    <>
                        <IntroLogo />
                        <Activity />
                    </>
                )
            case "구성원":
                return
            default:
                return <IntroLogo></IntroLogo>
        }
    }

    return (
        <div className="introSubFrame" style={{ width: `${width}%` }}>
            {subSectionHandler()}
        </div>
    )
}