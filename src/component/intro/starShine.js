import img from "../../img/star.png"
import { useEffect } from "react"

export default function StarShine({id}) {

    const starStyle = {
        position: 'absolute',
        width: 10 + Math.floor(Math.random() * 20),
        top: `${Math.random() * 99}vh`,
        left: -30,
        userSelect: "none",
        opacity: Math.random() * 0.9,
    }

    useEffect(() => {
        
        const animationName = `shine`;
        const animationDuration = `${20 + Math.random() * 20}s`;
        const animationTimingFunction = `linear`;
        const animationDelay = `${Math.random() * 30}s`;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
        @keyframes ${animationName} {
            0% {
                transform: translateX(100vw);
            }
         }`);

        const star = document.getElementById(`${id}`);
        star.style.animation = `${animationName} ${animationDuration} ${animationTimingFunction} ${animationDelay} infinite`

        return () => {
            console.log("Clean!")
        }
    }, [id]);

    return (
        <img id={id} style={starStyle} src={img} alt="1" />
    )
}