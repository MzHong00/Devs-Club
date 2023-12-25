import Profiles from "./profiles"
import { homeJson } from "../../constant/homeData"
import { useState } from "react";
import SecurityMember from "./securityMember";

const testProfiles = homeJson.userInfoTest[0];

export default function Member({ memberType }) {
    const [session, setSession] = useState(memberType === "임원" ? true : false);

    return (
        <div className="member">
            <div className="memberType">{memberType}</div>
            <div className="memberList">
                {
                    session ? (
                        <>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                            <Profiles {...testProfiles}></Profiles>
                        </>
                    ) : (
                        <SecurityMember></SecurityMember>
                    )
                }


            </div>
        </div>
    )
}