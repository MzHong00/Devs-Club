import { homeJson } from "../../constant/homeData"

export default function IntroLogo({summary=homeJson.introduce}) {

    return (
        <div className="introText">
            <div className="clubTitle">{homeJson.club_name}</div>
            <div className="clubSubTitle">{summary}</div>
        </div>
    )
}