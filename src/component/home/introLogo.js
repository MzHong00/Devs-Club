import { homeJson } from "../../constant/homeData"

export default function IntroLogo() {

    return (
        <div className="introText">
            <div className="clubTitle">{homeJson.club_name}</div>
            <div className="clubSubTitle">{homeJson.introduce}</div>
        </div>
    )
}