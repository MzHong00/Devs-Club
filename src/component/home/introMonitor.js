import { useState } from "react"
import Menubar from "./menuBar"
import MonitorMain from "./monitorMain"
import MonitorSub from "./monitorSub"
import NavBar from "./navBar"

export default function IntroMonitor() {
    const [currentSection, setCurrentSection] = useState("1");
    const [monitorWidths, setWidths] = useState({ main: 50, sub: 50 });

    console.log(monitorWidths)
    const handleSectionChange = (e) => {
        const sectionId = e.target.id;

        if(sectionId === "활동") {
            setWidths({ main: 0, sub: 100 });
        } else if(sectionId === "구성원") {
            setWidths({ main: 100, sub: 0 });
        } else {
            setWidths({ main: 50, sub: 50 });
        }

        setCurrentSection(sectionId);
    }

    return (
        <div className="introMonitor">
            <MonitorMain section={currentSection} width={monitorWidths.main} />
            <MonitorSub section={currentSection} width={monitorWidths.sub} handleSection={handleSectionChange} />
            <NavBar onClick={handleSectionChange} />
            <Menubar />
        </div>
    )
}
