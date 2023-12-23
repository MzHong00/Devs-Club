import Profiles from "./profiles"
import { homeJson } from "../../constant/homeData"

export default function Member({ memberType }) {
    const testProfiles = homeJson.userInfoTest[0];

    return (
        <div className="member">
            <div className="memberType">{memberType}</div>
            <div className="memberList">
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
                <Profiles {...testProfiles}></Profiles>
            </div>
        </div>
    )
}