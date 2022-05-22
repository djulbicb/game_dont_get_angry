import { useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

const Draggable = ({index, left, top}) => {
    const [pos, setPos] = useState({left: left, top:top})
            
    const onDragStart = (event) => { 
        console.log("Start")

      document.addEventListener('pointermove', onMouseMove)
      document.addEventListener('pointerup', onMouseUp)
    }
    const onMouseMove = (event) => {
        const map = document.getElementById("map");
        console.log(map);
        const parentHeight = map.clientHeight // event.originalTarget.clientHeight;
        const parentWidth = map.clientWidth //event.originalTarget.clientWidth;

        const x = event.pageX;
        const y = event.pageY; 

        var percentageX = ( x  / parentWidth ) * 100 + "%"; 
        var percentageY = ( y  / parentHeight ) * 100 + "%"; 

        console.log(x, y, percentageX, percentageY);
        setPos({
            left: percentageX,
            top: percentageY
        })
    }

    const onMouseUp = (event) => {
        console.log("Up")
        document.removeEventListener('pointermove', onMouseMove)
        document.removeEventListener('pointerup', onMouseUp)
    }
    

    const position = {left: pos.left, top:pos.top};
    return (
        <div className="waypoint" onPointerDown={onDragStart} style={position}>{index}</div>
    )
}

export default Draggable;