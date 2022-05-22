import { useState } from "react"
import Draggable from "./Draggable"

const initialState = [
    {left: "500px", top: "100px"},
    {left: "50%", top: "30%"}
]

const Waypoints = (props) => {
    const [points, setPoints] = useState(initialState)

    const renderPoints = () => {
        const ppp = points.map((item, key) => {
            return (
                <Draggable key={key} index={key} left={item.left} top={item.top}></Draggable>
            );
        })
        return ppp;
    }

    return (
        <div className="Waypoints">
            <div className="wrapper-rel">
                {renderPoints()}
            </div>
        </div>
    )
}

export default Waypoints