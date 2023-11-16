import { useState } from "react"
import Menubar from "./menuBar"
import MonitorMain from "./monitorMain"
import MonitorSub from "./monitorSub"
import NavBar from "./navBar"

export default function IntroMonitor() {
    const [introSection, setIntroSection] = useState(0);

    const changeSection = (e) => {
        setIntroSection(e.target.id);
    }

    return (
        <div className="introMonitor">
            <MonitorMain section={introSection}></MonitorMain>
            <MonitorSub section={introSection}></MonitorSub>
            <NavBar onClick={changeSection}></NavBar>
            <Menubar></Menubar>
        </div>
    )
}