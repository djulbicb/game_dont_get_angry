import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const Draggable = ({index, left, top}) => {
    const { height, width } = useWindowDimensions();

    const [pos, setPos] = useState({left: left, top:top})
    const [isDragged, setDragged] = useState(false);
            
    const onDragStart = (event) => { 
        setDragged(true); 
        console.log("Start")
    }
    const onDragEnd = (event) => { 
        // event.preventDefault();
        setDragged(false);
        console.log("end")}
    const onDrag = (event) => {
        // event.preventDefault();
        if (isDragged) {
            const rect = event.target.getBoundingClientRect();
            console.log(rect);
            const x = event.pageX ; // - 24;
            const y = event.pageY// - rect.height; // - 24;
            console.log(x, y)


            var percentageX = ( x  / width ) * 100 + "%"; 
            var percentageY = ( y  / height ) * 100 + "%"; 
            
            console.log(width, height, percentageX, percentageY)

            setPos({
                left:percentageX,
                top:percentageY,
            })
        } 
    }
    const onDragOver = (event) => {
        event.stopPropagation();
    }

    const position = {left: pos.left, top:pos.top};
    return (
        <div className="waypoint" onPointerDown={onDragStart} onPointerUp={onDragEnd} onPointerMove={onDrag} onPointerOver={onDragOver} onPointerOut={onDragEnd} style={position}>{index}</div>
    )
}

export default Draggable;