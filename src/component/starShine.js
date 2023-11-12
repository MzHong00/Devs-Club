import img from "./style/star.png"

const starStyle = {
    width: 10 + Math.floor(Math.random() * 20),

}

export default function StarShine() {

    return (
        <img src={img} style={starStyle} alt="1"></img>

    )
}