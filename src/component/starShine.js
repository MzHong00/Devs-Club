import img from "./style/star.png"
import { useEffect } from "react"

export default function StarShine({id}) {
    useEffect(() => {
        const animationName = `shine`;
        const animationDuration = `${30 + Math.random() * 20}s`;
        const animationTimingFunction = `linear`;
        const animationDelay = `${1 + Math.random() * 2}s`;

        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
        @keyframes ${animationName} {
            0% {
                transform: translateX(90vw)
            }
        }`);

        const star = document.getElementById('1');
        star.style.animation = `${animationName} 1s ${animationTimingFunction}`

        return () => {
            console.log("Clean!")
        }
    }, []);

    const starStyle = {
        position: 'absolute',
        width: 10 + Math.floor(Math.random() * 20),
        opacity: Math.random(),
        top: `${Math.random() * 99}vh`,
        left: -50,
    }

    return (
        <img id={id} style={starStyle} src={img} alt="1" />
    )
}