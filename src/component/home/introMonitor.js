import { useRef, useState } from "react"
import Menubar from "./menuBar"
import MonitorMain from "./monitorMain"
import MonitorSub from "./monitorSub"
import NavBar from "./navBar"

export default function IntroMonitor() {
    const [currentSection, setCurrentSection] = useState("홈");
    const [monitorWidths, setWidths] = useState({ main: 50, sub: 50 });
    const monitor = useRef();

    const handleSectionChange = (e) => {
        const sectionId = e.target.id;

        handleMonitorReverse(sectionId);
        handleMonitorRatio(sectionId);

        setCurrentSection(sectionId);
    }

    const handleMonitorRatio = (sectionId) => {
        if(sectionId === "활동") {
            setWidths({ main: 0, sub: 100 });
        } else if(sectionId === "신청") {
            setWidths({ main: 45, sub: 55 });
        } else if(sectionId === "소개") {
            setWidths({ main: 100, sub: 0 });
        } else {
            setWidths({ main: 50, sub: 50 });
        }
    }
    const handleMonitorReverse = (sectionId) => {
        monitor.current.style.flexDirection = sectionId === "구성원" ? "row-reverse" : "row";
    }

    return (
        <div className="introMonitor" ref={monitor}>
            <MonitorMain section={currentSection} width={monitorWidths.main} />
            <MonitorSub section={currentSection} width={monitorWidths.sub} handleSection={handleSectionChange} />
            <NavBar onClick={handleSectionChange} />
            <Menubar />
        </div>
    )
}
