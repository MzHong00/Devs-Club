import homeJson from "../../constant/home.json"

export default function IntroMonitor() {
    return (
        <div className="introMonitor">
            <div className="introMainFrame">
                <div className="introText">
                    <div className="clubTitle">{homeJson.club_name}</div>
                    <div className="clubSubTitle">{homeJson.introduce}</div>
                </div>
            </div>
            <div className="introSubFrame">
                <div className="loginFrame">
                </div>
                <div className="searchFrame">
                    <div className="searchButton"></div>
                </div>
            </div>
        </div>
    )
}