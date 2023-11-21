import { useState } from "react"
import Menubar from "./menuBar"
import MonitorMain from "./monitorMain"
import MonitorSub from "./monitorSub"
import NavBar from "./navBar"

export default function IntroMonitor() {
    const [introSection, setIntroSection] = useState("1");
    const changeSection = (e) => {
        setIntroSection(e.target.id);
    }

    return (
        <div className="introMonitor">
            <MonitorMain section={introSection} />
            <MonitorSub section={introSection} handleSection={changeSection} />
            <NavBar onClick={changeSection} />
            <Menubar />
        </div>
    )
}