import ClubNews from "./clubNews";
import IntroLogo from "./introLogo";
import Activity from "./activity";
import ClubSingup from "./clubSignup";
import Member from "./member";

export default function MonitorSub({ section, width, handleSection }) {

    const subSectionHandler = () => {

        switch (section) {
            case "홈":
                return <ClubNews onClick={handleSection} />
            case "소개":
                return;
            case "구성원":
                return <Member memberType="임원"></Member>
            case "활동":
                return (
                    <>
                        <IntroLogo summary="동아리 활동"/>
                        <Activity />
                    </>
                )
            case "신청":
                return <ClubSingup></ClubSingup>;
            default:
                return
        }
    }

    return (
        <div className="introSubFrame" style={{ width: `${width}%` }}>
            {subSectionHandler()}
        </div>
    )
}