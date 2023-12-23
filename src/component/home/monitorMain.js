import IntroLogo from "./introLogo";
import Member from "./member";

export default function MonitorMain({ section, width }) {

    const mainSectionHandler = () => {
        switch (section) {
            case "홈":
                return <IntroLogo></IntroLogo>
            case "소개":
                break;
            case "구성원":
                return <Member memberType="일반"></Member>
            case "활동":
                return
            case "신청":
                return <IntroLogo summary="동아리 가입신청"></IntroLogo>;
            default:
                return
        }
    }

    return (
        <div className="introMainFrame" style={{ width: `${width}%` }}>
            {mainSectionHandler()}
        </div>
    )
}