import { useState } from "react"
import { homeJson } from "../../constant/homeData"
import { Link } from "react-router-dom";


export default function Menubar() {
    const [showBar, setShowBar] = useState(false);

    const barHandler = () => {
        showBar ? setShowBar(false) : setShowBar(true);
    }
    return (
        <div className="menuBar">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 128 512" style={{ width: "2em", cursor: "pointer" }} onClick={barHandler}>
                <path style={{ fill: "white" }} d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
            {
                showBar ? <div className="menuBarFrame">
                    {homeJson.other_menu.map((idx) => {
                        return (
                            <Link key={idx.list_name} style={{ textDecoration: "none" }}>
                                <div className="menuIcon">
                                    <img src={idx.img_src} alt={idx.list_name} style={{ width: 32 }} />
                                    <span className="iconText" style={{ color: "white" }}>{idx.list_name}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div> : null
            }
        </div>
    )
}