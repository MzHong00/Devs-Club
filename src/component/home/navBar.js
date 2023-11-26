import { homeJson } from "../../constant/homeData"

export default function NavBar(props) {
    return (
        <nav className="navBar">
            {
                homeJson.intro_nav.map((idx) =>
                    <div key={idx.id} id={idx.name} className="navBarContent" {...props}>
                        {idx.name}
                    </div>
                )
            }
        </nav>
    )
}