import homeJson from "../../constant/home.json"

export default function NavBar(props) {

    return (
        <nav className="navBar">
            {
                homeJson.intro_nav.map((idx) => 
                    <div key={idx.id} id={idx.id} className="navBarContent" {...props}>
                        {idx.name}
                    </div>
                )
            }
        </nav>
    )
}