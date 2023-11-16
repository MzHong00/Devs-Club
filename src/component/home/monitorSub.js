import IntroLogo from "./introLogo";

export default function MonitorSub({ section }) {
    const subSectionHandler = () => {
    console.log(section)

        switch (section) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                return <IntroLogo></IntroLogo>
            default:
                return (
                    <div className="searchFrame">
                        <div className="searchButton"></div>
                    </div>
                )
        }
    }

    return (
        <div className="introSubFrame">
            {subSectionHandler()}
        </div>
    )
}