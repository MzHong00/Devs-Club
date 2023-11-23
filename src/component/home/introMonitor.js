import { useEffect, useState } from "react"
import Menubar from "./menuBar"
import MonitorMain from "./monitorMain"
import MonitorSub from "./monitorSub"
import NavBar from "./navBar"

export default function IntroMonitor() {
    const [currentSection, setCurrentSection] = useState("1");
    const [monitorMainWidth, setMainWidth] = useState(50);
    const [monitorSubWidth, setSubWidth] = useState(50);

    const handleSectionChange = (e) => {
        setCurrentSection(e.target.id);
    }

    useEffect(() => {
        const isSectionThree = currentSection === "3";
        setMainWidth(isSectionThree ? 0 : 50);
        setSubWidth(isSectionThree ? 100 : 50);
    }, [currentSection]);

    return (
        <div className="introMonitor">
            <MonitorMain section={currentSection} width={monitorMainWidth} />
            <MonitorSub section={currentSection} width={monitorSubWidth} handleSection={handleSectionChange} />
            <NavBar onClick={handleSectionChange} />
            <Menubar />
        </div>
    )
}
