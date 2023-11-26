import { useState, useRef } from "react";

export const useDrag = () => {
    const [isClick, setIsClick] = useState(false);
    const [clientX, setClientX] = useState();
    const [currentX, setCurrentX] = useState(0);
    const [diffX, setDiffX] = useState();
    const ref = useRef();

    const onMouseDown = (e) => {
        setIsClick(true);
        setClientX(e.clientX);
    }

    const onMouseMove = (e) => {
        if (isClick) {
            console.log(diffX)
            setDiffX(clientX - e.clientX + currentX);
            ref.current.style.transform = `translateX(${-diffX}px)`;
        }
    }

    const onMouseUp = () => {
        setIsClick(false);
        setCurrentX(diffX);
    }

    return [ ref, { onMouseDown, onMouseMove, onMouseUp}];
}
